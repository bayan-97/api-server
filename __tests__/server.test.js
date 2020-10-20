const { server } = require('../lib/server.js');
const supertest = require('supertest');
const { request } = require('express');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');

describe('api server products', () => {
  it('should respond for get', async () => {
    jest.setTimeout(50000);
    let res1 = await mockRequest.post('/api/v1/products').send({ name: 'Joe',  category: 'm', description: 'mm' });
    const res = await mockRequest.get(`/api/v1/products`);
    const response = [
      {
        __v: 0,
        name: 'Joe',
         category: 'm',
        description: 'mm',
        _id: `${res1.body._id}`,
      },
    ];

    expect(res.status).toBe(302);
    expect(res.body).toEqual(response);
  });
  it('should respond with post for post', async () => {
    jest.setTimeout(50000);
    let res1 = await mockRequest
      .post('/api/v1/products')
      .send({ name: 'Joe',  category: 'm', description: 'mm' });
    const res = await mockRequest.get(`/api/v1/products`);
    const response = {
      __v: 0,
      name: 'Joe',
       category: 'm',
      description: 'mm',
      _id: `${res1.body._id}`,
    };

    expect(res.status).toBe(302);
    expect(res.body[1]).toEqual(response);
  });
  it('should respond with  for put', async () => {
    jest.setTimeout(50000);
    let res3 = await mockRequest
      .post('/api/v1/products')
      .send({ name: 'Joe',  category: 'm', description: 'mm' });

    const res1 = await mockRequest
      .put(`/api/v1/products/${res3.body._id}`)
      .send({
        name: 'Joeee',
         category: 'm',
        description: 'mm',
      });
      console.log( "aa",res1.body)
    const res = await mockRequest.get(`/api/v1/products/${res3.body._id}`);
    console.log("lll",res.body)
    const response = {
      _id: `${res3.body._id}`,
      name:'Joeee',
       category: 'm',
      description: 'mm',
      __v: 0,
    };

    expect(res.status).toBe(302);
    expect(res.body).toEqual(response);
  });
  it('should respond with post for delete', async () => {
    jest.setTimeout(50000);
    let res1 = await mockRequest
      .post('/api/v1/products')
      .send({ name: 'Joe',  category: 'm', description: 'mm' });
    await mockRequest.delete(`/api/v1/products/${res1.body._id}`);
    const response = {
      __v: 0,
      name: 'Joe',
      _id: `${res1.body._id}`,
       category: 'm',
      description: 'mm',
    };
    const res = await mockRequest.get(`/api/v1/products/${res1.body._id}`);
    expect(res.status).toBe(302);
    expect(res.body).not.toEqual(response);
  });
});

  describe('api server categories', () => {

 
  it('should respond with post for get', async () => {
    jest.setTimeout(50000);
    let res1 = await mockRequest.post('/api/v1/categories').send({ name: 'Joe', display_name: 'm', description: 'mm' });
    const res = await mockRequest.get(`/api/v1/categories`);
    const response = [
      {
        __v: 0,
        name: 'Joe',
        display_name: 'm',
        description: 'mm',
        _id: `${res1.body._id}`,
      },
    ];

    expect(res.status).toBe(302);
    expect(res.body).toEqual(response);
  });
  it('should respond with post for post', async () => {
    jest.setTimeout(50000);
    let res1 = await mockRequest
      .post('/api/v1/categories')
      .send({ name: 'Joe', display_name: 'm', description: 'mm' });
    const res = await mockRequest.get(`/api/v1/categories`);
    const response = {
      __v: 0,
      name: 'Joe',
      display_name: 'm',
      description: 'mm',
      _id: `${res1.body._id}`,
    };

    expect(res.status).toBe(302);
    expect(res.body[1]).toEqual(response);
  });
  it('should respond with  for put', async () => {
    jest.setTimeout(50000);
    let res3 = await mockRequest
      .post('/api/v1/categories')
      .send({ name: 'Joe', display_name: 'm', description: 'mm' });

    const res1 = await mockRequest
      .put(`/api/v1/categories/${res3.body._id}`)
      .send({
        name: 'Joeee',
        display_name: 'm',
        description: 'mm',
      });
      console.log( "aa",res1.body)
    const res = await mockRequest.get(`/api/v1/categories/${res3.body._id}`);
    console.log("lll",res.body)
    const response = {
      _id: `${res3.body._id}`,
      name:'Joeee',
      display_name: 'm',
      description: 'mm',
      __v: 0,
    };

    expect(res.status).toBe(302);
    expect(res.body).toEqual(response);
  });
  it('should respond with post for delete', async () => {
    jest.setTimeout(50000);
    let res1 = await mockRequest
      .post('/api/v1/categories')
      .send({ name: 'Joe', display_name: 'm', description: 'mm' });
    await mockRequest.delete(`/api/v1/categories/${res1.body._id}`);
    const response = {
      __v: 0,
      name: 'Joe',
      _id: `${res1.body._id}`,
      display_name: 'm',
      description: 'mm',
    };
    const res = await mockRequest.get(`/api/v1/categories/${res1.body._id}`);
    expect(res.status).toBe(302);
    expect(res.body).not.toEqual(response);
  });
});
