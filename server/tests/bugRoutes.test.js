const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Bug = require('../models/Bug');

beforeAll(async () => {
  const mongoURI = 'mongodb://127.0.0.1:27017/bugtracker_test';
  await mongoose.connect(mongoURI);
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Bug API Tests', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Sample Bug', description: 'Test bug' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Sample Bug');
  });

  it('should get all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
