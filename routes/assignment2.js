const path = require("path");

const routeAssignment2 = [
    {
        method: "GET",
        path: "/",
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../public", "index.html"));
        }
    },
    {
        method: "GET",
        path: "/index.js",
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../public", "index.js"));
        }
    }
];

module.exports = [...routeAssignment2];