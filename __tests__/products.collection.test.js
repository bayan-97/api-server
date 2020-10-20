'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');
const prouduct = require('../lib/models/products/products.collection.js');
const { replaceOne } = require('../lib/models/products/products.schema.js');
describe(' prouduct Model', () => {


it('can create() a  prouduct item', async () => {
  jest.setTimeout(50000);
  const obj = { 
  name: "bayan3",
  category:"catogery,description",
  description:"DD",
};
  const expected = { 
      name: "bayan3",
      category:"catogery,description",
      description:"DD",
    };
  const record = await  prouduct.create (obj);
  console.log( record);
  Object.keys(expected).forEach((key) => {


    if (key !=="_id"){

      expect( record[key]).toEqual(expected[key]);
      
    }
  });
});
it('can update() a  prouduct item', async () => {
    jest.setTimeout( 50000);
    const obj = { 
      name: "bayan3",
      category:"category,description",
      description:"DD",
    };
    const expected = { 
        name: "bayan4",
        category:"category,description",
        description:"DD",
      };
    // const obj = { text: 'test  prouduct3', prouduct: 'school' };
    // // const expected = { text: 'test  prouduct', prouduct:'scool' };
    const record = await  prouduct.create(obj);
    record.name="bayan4";
    const  prouductItem = await  prouduct.update(record._id,record);
    console.log("hhh",prouductItem)
    expect( prouductItem.name).toEqual( "bayan4");
  });
  it('can read() a  prouduct item', async () => {
    jest.setTimeout(50000);
    const obj = { 
    name: "bayan34",
    category:"category,description",
    description:"DD",
  };
    const expected = { 
        name: "bayan34",
        category:"category,description",
        description:"DD",
      };
    const record = await  prouduct.create (obj);
    const  prouductItem = await  prouduct.read(undefined,record.name)

    console.log("tt", prouductItem);
    Object.keys(expected).forEach((key) => {


      if (key !=="_id"){

        expect( prouductItem[0][key]).toEqual(expected[key]);
        
      }
    });
  });
  it('can delete() a  prouduct item', async () => {
    jest.setTimeout( 50000);
    const obj = { 
      name: "bayan3",
      category:"category,description",
      description:"DD",
    };
    // const expected = { text: 'test  prouduct', prouduct:'scool' };
    const record = await  prouduct.create(obj);
    await  prouduct.delete(record._id);
    //    const  prouductItem = await  prouduct.get(record._id);
    const  prouductItem1 = await  prouduct.read();
    console.log(prouductItem1)
     prouductItem1.forEach((key) => {
      expect(key.id).not.toEqual(record.id);
    });
  });
  
});

