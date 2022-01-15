module.exports.assignment1 = (request, reply) => {
    const payload = request.payload;
    if (!payload) return reply.response({ error: "missing body" }).code(400);

    const output = [];
    const steps = Object.keys(payload);
    if (steps.length === 1) return payload[0];

    for (let i = steps.length - 1; i >= 0; i--) {
        let childrenGroup = {};
        for (let data of payload[i]) {
            let parentId = data.parent_id ? data.parent_id : "root";
            if (parentId in childrenGroup) {
                childrenGroup[parentId] = [...childrenGroup[parentId], data];
            } else {
                childrenGroup[parentId] = [data];
            }
        }
        let parent = i - 1;
        if (parent < 0) break;
        for (let data of payload[parent]) {
            data.children = childrenGroup[data.id] ? childrenGroup[data.id] : [];
            parent === 0 && output.push(data)
        }
    }

    return output;
};