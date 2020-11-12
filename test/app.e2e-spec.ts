import * as request from 'supertest';
const app = 'https://us-central1-salesn-1d2ae.cloudfunctions.net/api';

describe('ROOT', () => {

  it('Verificar ping', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
