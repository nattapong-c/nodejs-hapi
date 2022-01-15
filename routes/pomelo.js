const path = require("path");
const { assignment1 } = require("../controllers/assignment1");

const routeAssignment1 = {
    method: 'POST',
    path: '/assignment1',
    options: {
        handler: assignment1
    }
};

const routeAssignment2 = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../public", "index.html"));
        }
    },
    {
        method: 'GET',
        path: '/index.js',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../public", "index.js"));
        }
    }
];

module.exports = [routeAssignment1, ...routeAssignment2];