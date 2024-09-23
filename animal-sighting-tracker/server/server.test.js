const request = require('supertest');
const app = require('./server.js');

// test get test connection
describe('GET /test', () => {
    it('responds with JSON containing a message', async () => {
        const response = await request(app).get('/test');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, from ExpressJS with React-Vite' })
    });
});

// mock the database query to control the response of the db.query without hitting the actual database
jest.mock('./db/db-connection.js', () => ({
    query: jest.fn(),
}));

const db = require('./db/db-connection.js');

// test get request for the endpoint /species
describe('GET /species', () => {
    it('responds with an array of species', async () => {
        // mocks the database response
        const mockSpecies = [
            { 
                id: 1, 
                common_name: 'Bengal Tiger', 
                scientific_name: 'panthera tigris tigris',
                population_count: 2500, 
                conservation_status_code: 'EN', 
                record_creation_timestamp: '2021-07-10'
            }
        ];
        db.query.mockResolvedValue({ rows: mockSpecies });

        const response = await request(app).get('/species');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockSpecies);
    });

    // it('responds with status 400 on error', async () => {
    //     // mock the database to throw an error
    //     db.query.mockRejectedValue(new Error('Database Error'));
        
    //     const response = await request(app).get('/species');

    //     expect(response.status).toBe(400);
    //     expect(response.body).toEqual({ error: 'Database error' });
    // });
});

// test post request for the endpoint /species/sightings
describe('POST /species/sightings', () => {
    it('creates a new sighting and responds with sighting data', async () => {
        // mocks the database responses
        db.query
            .mockResolvedValueOnce({ rows: [{ id: 1 }]})
            .mockResolvedValueOnce({
                rows: [{
                    id: 145, 
                    individual_seen: 'Benny',
                    species: 'panthera tigris tigris',
                    date_of_sighting: '2023-09-22',
                    location_of_sighting: 'China',
                    is_healthy: true,
                    email: 'adamsmith@gmail.com',
                    image_url: '/src/benny-sighting3.jpg'
                }],
            });
            
        const newSighting = {
            id: 145, 
            individual_seen: 'Benny',
            species: 'panthera tigris tigris',
            date_of_sighting: '2023-09-22',
            location_of_sighting: 'China',
            is_healthy: true,
            email: 'adamsmith@gmail.com',
            image_url: '/src/benny-sighting3.jpg'
        };
        
        const response = await request(app)
            .post('/species/sightings')
            .send(newSighting);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 145, 
            individual_seen: 'Benny',
            species: 'panthera tigris tigris',
            date_of_sighting: '2023-09-22',
            location_of_sighting: 'China',
            is_healthy: true,
            email: 'adamsmith@gmail.com',
            image_url: '/src/benny-sighting3.jpg'
        });
    });
})