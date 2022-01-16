const Hapi = require("@hapi/hapi");
const mock = require("./data/assignment1");
const routes = require("../routes/assignment1");

const server = Hapi.server({
    port: 3003,
    host: 'localhost'
});
server.route(routes);

beforeEach(async () => {
    await server.initialize();
});

afterEach(async () => {
    await server.stop();
});

describe('POST /assignment1', () => {
    let method = "post";
    let url = "/assignment1";
    it('example 0: no body', async () => {
        const res = await server.inject({
            method,
            url
        });
        expect(res.statusCode).toBe(400);
        expect(res.result.error).toBe("missing body");
    });

    it('example 1: original example', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example1
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toEqual(mock.example1_output);
    });

    it('example 2: 1 dept -> only house', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example2
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toEqual(mock.example2_output);
    });
    it('example 3: 2 dept -> 2 children of house', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example3
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toEqual(mock.example3_output);
    });

    it('example 4: 4 dept', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example4
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toEqual(mock.example4_output);
    });
});