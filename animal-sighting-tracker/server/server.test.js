const request = require('supertest');
const app = require('./server.js');

describe('GET /test', () => {
    it('responds with JSON containing a message', async () => {
        const response = await request(app).get('/test');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, from ExpressJS with React-Vite' })
    });
});