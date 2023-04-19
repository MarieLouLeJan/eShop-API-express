import request from 'supertest';
import app from '../index.js';

// NODE_OPTIONS=--experimental-vm-modules npx jest

describe('POST /register', () => {
  describe('provide all the required datas', () => {
    test('Should return the user with its ID and without password', async () => {
      const response = await request(app).post('/users/register').send({
        firstname: 'Marie',
        lastname: 'Lou',
        email: 'test1@gmail.com',
        password: 'Monpassword.1234',
        active: true,
        role_id: 1,
      });
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.password).not.toBeDefined();
    });

    test('Should respond with 201 status code', async () => {
      const response = await request(app).post('/users/register').send({
        firstname: 'Marie',
        lastname: 'Lou',
        email: 'test2@gmail.com',
        password: 'Monpassword.1234',
        active: true,
        role_id: 1,
      });
      expect(response.statusCode).toBe(201);
    });
    test('Should specify json in the content type header', async () => {
      const response = await request(app)
        .post('/users/register')
        .send({
          firstname: 'Marie',
          lastname: 'Lou',
          email: 'test3@gmail.com',
          password: 'Monpassword.1234',
          active: true,
          role_id: 1,
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });

  describe('When the lastname is missing', () => {
    test('Should respond with a status code of 500', async () => {
      const response = await request(app)
        .post('/users/register')
        .send({
          firstname: 'Marie',
          lastname: '',
          email: 'test3@gmail.com',
          password: 'Monpassword.1234',
          active: true,
          role_id: 1,
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
      expect(response.statusCode).toBe(500);
    });
  });
});
