const glob = require("glob");
const path = require("path");

module.exports = () => {
    const files = glob.sync(path.join(path.resolve("routes"), "/*.js"));
    let routes = [];
    for(let file of files) {
        routes = routes.concat(require(file));
    }
    return routes;
}
