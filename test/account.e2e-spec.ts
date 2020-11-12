import * as request from 'supertest';
import { HttpStatus } from '@nestjs/common';
import { CreateAccountDto } from '../src/accounts/account.dto';
import * as mongoose from 'mongoose';
const app = 'https://us-central1-salesn-1d2ae.cloudfunctions.net/api/accounts';

// beforeAll(async()=>{
//     await mongoose.connect('mongodb://localhost:27017/salesN');
//     await mongoose.connection.db.dropDatabase();
// });

// afterAll(async done=> {
//   await mongoose.disconnect(done)
// });
let idCuenta='';

describe('Account', () => {
  it.only('Crear cuenta', () => {
    const account: CreateAccountDto = {
      email: 'email',
      status:'Activa',
      password: 'password'
  };
    
  return request(app)
    .post('/accounts')
    .set('Accept', 'application/json')
    .send(account)
    .expect(({ body })=>{
      idCuenta=body._id;
      expect(body.email).toEqual('email');
      expect(body.status).toEqual('Activa');
      expect(body.password).toEqual('password');
    })
    .expect(HttpStatus.CREATED);
  });

  it('Modificar cuenta', () => {
    const account: CreateAccountDto = {
      email: 'email2',
      status:'Activa',
      password: 'password'
    };

    return request(app)
    .put('/accounts/'+idCuenta)
    .set('Accept', 'application/json')
    .send(account)
    .expect(({ body })=>{
      expect(body.email).toEqual('email');
      expect(body.status).toEqual('Activa');
      expect(body.password).toEqual('password');
    })
    .expect(HttpStatus.OK);
  });

  it('Consultar todas cuenta', () => {
    return request(app)
    .get('/accounts')
    .set('Accept', 'application/json')
    .expect(({ body })=>{
      body.forEach(element => {
        expect(element.email).toEqual('email2');
        expect(element.status).toEqual('Activa');
        expect(element.password).toEqual('password');  
      });
    })
    .expect(HttpStatus.OK);
  });

  it('Consultar una cuenta', () => {
    return request(app)
    .get('/accounts/'+idCuenta)
    .set('Accept', 'application/json')
    .expect(({ body })=>{
      expect(body.email).toEqual('email2');
      expect(body.status).toEqual('Activa');
      expect(body.password).toEqual('password');
    })
    .expect(HttpStatus.OK);
  });

  it('Eliminar cuenta', () => {
    return request(app)
    .delete('/accounts/'+idCuenta)
    .set('Accept', 'application/json')
    .expect(({ body })=>{
      expect(body.email).toEqual('email2');
      expect(body.status).toEqual('Activa');
      expect(body.password).toEqual('password');
    })
    .expect(HttpStatus.OK);
  });
});
