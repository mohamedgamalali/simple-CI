const expect = require('chai').expect;
const request = require('supertest');
const app = require('./middlewere')();

describe('API tests', () => {
    it('create user ', async () => {
        const res = await request(app).post('/user')
            .send({
                userName: 'test',
                email: 'test@ters.com'
            })
            .expect(201);
        expect(res.body.message).to.equal('User Created');
        expect(res.body.result).to.deep.equal({
            userName: 'test',
            email: 'test@ters.com'
        })
    })
})