const path = require("path");

const routeDoc = [
    {
        method: 'GET',
        path: '/documentation',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../spec/docs", "index.html"));
        }
    },
    {
        method: 'GET',
        path: '/bundle.css',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../spec/docs", "bundle.css"));
        }
    },
    {
        method: 'GET',
        path: '/bundle.js',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../spec/docs", "bundle.js"));
        }
    },
    {
        method: 'GET',
        path: '/insomnia.json',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../spec/docs", "insomnia.json"));
        }
    },
    {
        method: 'GET',
        path: '/logo.png',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../spec/docs", "logo.png"));
        }
    },
    {
        method: 'GET',
        path: '/favicon.ico',
        handler: (request, reply) => {
            return reply.file(path.join(__dirname, "../spec/docs", "favicon.ico"));
        }
    }
];

module.exports = [...routeDoc];