'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');
const category = require('../lib/models/categories/categories.collection.js');
describe(' category Model', () => {


it('can create() a  category item', async () => {
  jest.setTimeout(50000);
  const obj = { 
  name: "bayan3",
  display_name:"display_name,description",
  description:"DD",
};
  const expected = { 
      name: "bayan3",
      display_name:"display_name,description",
      description:"DD",
    };
  const record = await  category.create (obj);
  console.log( record);
  Object.keys(expected).forEach((key) => {


    if (key !=="_id"){

      expect( record[key]).toEqual(expected[key]);
      
    }
  });
});

  it('can read() a  category item', async () => {
    jest.setTimeout(50000);
    const obj = { 
    name: "bayan3",
    display_name:"display_name,description",
    description:"DD",
  };
    const expected = { 
        name: "bayan3",
        display_name:"display_name,description",
        description:"DD",
      };
    const record = await  category.create (obj);
    const  categoryItem = await  category.read(undefined,record.name)

    console.log( categoryItem);
    Object.keys(expected).forEach((key) => {


      if (key !=="_id"){

        expect( categoryItem[0][key]).toEqual(expected[key]);
        
      }
    });
  });
  it('can delete() a  category item', async () => {
    jest.setTimeout( 50000);
    const obj = { 
      name: "bayan3",
      display_name:"display_name,description",
      description:"DD",
    };
    // const expected = { text: 'test  category', category:'scool' };
    const record = await  category.create(obj);
    await  category.delete(record._id);
    //    const  categoryItem = await  category.get(record._id);
    const  categoryItem1 = await  category.read();
    console.log(categoryItem1)
     categoryItem1.forEach((key) => {
      expect(key.id).not.toEqual(record.id);
    });
  });
  it('can update() a  category item', async () => {
    jest.setTimeout( 50000);
    const obj = { 
      name: "bayan3",
      display_name:"display_name,description",
      description:"DD"
    };
    const expected = { 
      name: "bayan4",
      display_name:"display_name,description",
      description:"DD"
    };
    
    // const obj = { text: 'test  category3', category: 'school' };
    // // const expected = { text: 'test  category', category:'scool' };
    const record = await  category.create(obj);
    record.name="bayan4";
    const  categoryItem = await  category.update(record._id, record);
    expect( categoryItem.name).toEqual( "bayan4");
  });
});

