const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../lib/server');
const mock = require("./data/assignment1");

let server;
beforeEach(async () => {
    server = await init();
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
        expect(res.statusCode).to.be.a.number(400);
        expect(res.result.error).to.be.a.string("missing body");
    });

    it('example 1: original example', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example1
        });
        expect(res.statusCode).to.be.a.number(200);
        expect(res.result).to.equal(mock.example1_output);
    });

    it('example 2: 1 dept -> only house', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example2
        });
        expect(res.statusCode).to.be.a.number(200);
        expect(res.result).to.equal(mock.example2_output);
    });
    it('example 3: 2 dept -> 2 children of house', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example3
        });
        expect(res.statusCode).to.be.a.number(200);
        expect(res.result).to.equal(mock.example3_output);
    });

    it('example 4: 4 dept', async () => {
        const res = await server.inject({
            method,
            url,
            payload: mock.example4
        });
        expect(res.statusCode).to.be.a.number(200);
        expect(res.result).to.equal(mock.example4_output);
    });
});