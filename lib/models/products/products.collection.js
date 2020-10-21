
'use strict';
const proudectModel = require('./products.schema.js');
const  Collectionprod = require('../mongo.js');



class Product extends Collectionprod {
    constructor() {
      super(proudectModel);
    }
  
   
  }

module.exports = new Product();