const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server products', () => {



  it('should respond with 200 on a correct route', () => {
    return mockRequest.get('/api/v1/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 302 on a wrong method', () => {
    return mockRequest.get('/api/v1/products/:id').then((results) => {
      expect(results.status).toBe(302);
    });
  });
  it('should respond with 201 for post', () => {
    return mockRequest.post('/api/v1/products').then((results) => {
      expect(results.status).toBe(201);
    });
  })
  it('should respond with 201 for post', async() => {
    await mockRequest
    .put('/api/v1/products/1')
    .send({ name: 'Joe', category:"m",description:"mm"});
const res = await mockRequest.get('/api/v1/products/1');
const response = 
    { name: 'Joe', id: 1,category:"m",description:"mm"}

expect(res.status).toBe(302);
expect(res.body).toEqual(response);
})
  it('should respond with 201 for post', () => {
    return mockRequest.delete('/api/v1/products/:id').then((results) => {
      expect(results.status).toBe(202);
    });
  });
});

describe('api server categories', () => {



    it('should respond with 200 on a correct route', () => {
      return mockRequest.get('/api/v1/categories').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 302 on a wrong method', () => {
      return mockRequest.get('/api/v1/categories/:id').then((results) => {
        expect(results.status).toBe(302);
      });
    });
    it('should respond with 201 for post', () => {
      return mockRequest.post('/api/v1/categories').then((results) => {
        expect(results.status).toBe(201);
      });
    })
    it('should respond with 201 for post', async() => {
        await mockRequest
        .put('/api/v1/categories/1')
        .send({ name: 'Joe', display_name:"m",description:"mm"});
    const res = await mockRequest.get('/api/v1/categories/1');
    const response = 
        { name: 'Joe', id: 1,display_name:"m",description:"mm"}
    
    expect(res.status).toBe(302);
    expect(res.body).toEqual(response);
})
it('should respond with 201 for post', () => {
  return mockRequest.delete('/api/v1/categories/:id').then((results) => {
    expect(results.status).toBe(202);
  });
});
    });
  