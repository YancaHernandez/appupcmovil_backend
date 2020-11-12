// import * as request from 'supertest';
// import { HttpStatus } from '@nestjs/common';
// import { RegisterDTO } from '../src/auth/auth.dto';
// import * as mongoose from 'mongoose';
// import { LoginDTO } from '../dist/auth/auth.dto';

// const app = 'http://localhost:3000';

// beforeAll(async()=>{
//     await mongoose.connect('mongodb://localhost:27017/salesN');
//     await mongoose.connection.db.dropDatabase();
// });

// afterAll(async done=> {
//   await mongoose.disconnect(done)
// });

// describe('AUTH', () => {
//   it('Debe dejar registrar register', () => {
//     const user: RegisterDTO = {
//       name: 'name',
//       email: 'email',
//       password: 'password'
//     };
    
//     return request(app)
//     .post('/auth/register')
//     .set('Accept', 'application/json')
//     .send(user)
//     .expect(({ body })=>{
//       expect(body.token).toBeDefined();
//       expect(body.user.name).toEqual('name');
//       expect(body.user.name).toEqual('name');
//       expect(body.user.password).toEqual('');
//     })
//     .expect(HttpStatus.CREATED);
//   });

//   it('Verificar duplicate', () => {
//     const user: RegisterDTO = {
//       name: 'name',
//       email: 'email',
//       password: 'password'
//     };
//     return request(app)
//     .post('/auth/register')
//     .set('Accept', 'application/json')
//     .send(user)
//     .expect(({ body })=>{
//       expect(body.message).toEqual('El email ya existe');
//       expect(body.statusCode).toEqual(HttpStatus.BAD_REQUEST);
//     })
//     .expect(HttpStatus.BAD_REQUEST);
//   });

//   it('Login', () => {
//     const user: LoginDTO = {
//       email: 'email',
//       password: 'password'
//     };
    
//     return request(app)
//     .post('/auth/login')
//     .set('Accept', 'application/json')
//     .send(user)
//     .expect(({ body })=>{
//       expect(body.token).toBeDefined();
//       expect(body.user.name).toEqual('name');
//       expect(body.user.email).toEqual('email');
//       expect(body.user.password).toEqual('');
//     })
//     .expect(HttpStatus.CREATED);
//   });
// });
