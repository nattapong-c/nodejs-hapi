const Hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");
const routes = require("../utils/routes");

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route(routes());

exports.init = async () => {
    await server.initialize();
    return server;
};

exports.start = async () => {
    await server.register(inert);
    await server.start();
    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});