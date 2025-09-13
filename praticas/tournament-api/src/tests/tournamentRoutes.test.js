const request = require('supertest');
const app = require('../app');

describe('Testando as rotas', () => {

    test('Deve listar todas as entradas', async () => {
        const response = await request(app).get('/entries');
        expect(response.status).toBe(200);
    });

    test('Deve criar uma nova entrada', async () => {
        const response = await request(app).post('/entries').send({ name: 'Matheus Fonseca', game: 'R6 Siege' });
        expect(response.status).toBe(201);
    });

    test('Deve atualizar uma entrada', async () => {

        const createResponse = await request(app).post('/entries').send({ name: 'Matheus Fonseca', game: 'R6 Siege' });
        const entryId = createResponse.body.id;
        
        const response = await request(app).put(`/entries/${entryId}`).send({ name: 'Matheus Fonseca', game: 'R6 Siege' });
        expect(response.status).toBe(200);
    });

    test('Deve deletar uma entrada', async () => {
        const createResponse = await request(app).post('/entries').send({ name: 'Matheus Fonseca', game: 'R6 Siege' });
        const entryId = createResponse.body.id;
        const response = await request(app).delete(`/entries/${entryId}`);
        expect(response.status).toBe(204);
    });
});
