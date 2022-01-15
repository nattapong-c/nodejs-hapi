var size = 10;
const NUMBER_OF_PAGING = 9;
const LIMIT_QUERY = 1000;

/**
 * @param {Number} currentPage           current page of data.
 * @param {Array.<{id: String, full_name: String, html_url: String}>} items           List of repositories.
 */
const renderRows = (currentPage, items) => {
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";
    let index = (currentPage - 1) * size;
    for (let item of items) {
        const { id, full_name, html_url } = item;
        const row = document.createElement("tr");
        const colIndex = document.createElement("td");
        const colId = document.createElement("td");
        const colName = document.createElement("td");
        const colURL = document.createElement("td");
        index += 1;
        colIndex.innerText = index;
        colId.innerText = id;
        colName.innerText = full_name;
        colURL.innerHTML = `<a href='${html_url}' target='_blank'>${html_url}</a>`;

        row.appendChild(colIndex);
        row.appendChild(colId);
        row.appendChild(colName);
        row.appendChild(colURL);
        tbody.appendChild(row);
    }
};


/**
 * @param {Number} currentPage           current page of data.
 * @param {Number} totalItem           number of items.
 */

const renderPagination = (currentPage, totalItem) => {
    let totalPage = Math.ceil(totalItem / Number.parseInt(size));
    totalPage = size * totalPage > LIMIT_QUERY ? Math.ceil(LIMIT_QUERY / size) : totalPage;

    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    let start = currentPage - 5 < 1 ? 1 : currentPage - 5;
    let end = start + NUMBER_OF_PAGING > totalPage ? totalPage : start + NUMBER_OF_PAGING;

    const first = document.createElement("li");
    first.innerText = "<<";
    if (currentPage - 1 < 1) first.classList.add("disabled");
    first.addEventListener("click", () => getRepo(1));
    pagination.appendChild(first);

    const prev = document.createElement("li");
    prev.innerText = "<";
    if (currentPage - 1 < 1) prev.classList.add("disabled");
    prev.addEventListener("click", () => getRepo(currentPage - 1));
    pagination.appendChild(prev);

    for (let page = start; page <= end; page++) {
        const li = document.createElement("li");
        page === currentPage && li.classList.add("active");
        li.innerText = page;
        li.addEventListener("click", () => getRepo(page));
        pagination.appendChild(li);
    }

    const next = document.createElement("li");
    next.innerText = ">";
    if (currentPage + 1 > totalPage) next.classList.add("disabled");
    next.addEventListener("click", () => getRepo(currentPage + 1));
    pagination.appendChild(next);

    const last = document.createElement("li");
    last.innerText = ">>";
    if (currentPage + 1 > totalPage) last.classList.add("disabled");
    last.addEventListener("click", () => getRepo(totalPage));
    pagination.appendChild(last);

};

/**
 * @param {Number} currentPage           current page of data.
 */

const getRepo = async (currentPage) => {
    const loading = document.getElementById("loading");
    loading.classList.add("active");
    let res = await fetch(
        `https://api.github.com/search/repositories?q=nodejs&per_page=${size}&page=${currentPage}`,
        { method: "GET" }
    );
    let results = await res.json();
    if (res.status !== 200) {
        document.getElementById("error").innerText = `Error: ${results.message}`;
        loading.classList.remove("active");
        return false;
    }

    renderRows(currentPage, results.items);
    renderPagination(currentPage, results.total_count);
    loading.classList.remove("active");
};

const onChangeSize = () => {
    let value = document.getElementById("select-size").value;
    console.log(value);
    size = value;
    getRepo(1);
}

getRepo(1);
