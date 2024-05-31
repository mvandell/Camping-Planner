const app = require('../app');
const request = require('supertest');
// const prismaClient  = require('@prisma/client');
const express = require('express');


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


jest.mock('jsonwebtoken');
jest.mock('bcrypt');
const prismaMock = require('../../mocks/prismaMock');
const prisma = new prisma.prismaMock


/* NOTE: this is just an example test, you can delete it
- your tests should be in folders __tests__ co-located with
whichever file they are testing

For example: api/__tests__/users.test.js would test api/users.js
*/
 
describe('Express App', () => {
    it('is live and responding to requests', async () => {
        const response = await request(app).get('/');
        console.log(response)
        expect(response.status).toBe(200);
    })
});