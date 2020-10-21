
'use strict';
const  CategoryModel = require('./categories.schema.js');
const  Collectioncat = require('../mongo.js');



class Category extends Collectioncat {
    constructor() {
      super(CategoryModel);
    }
  
   
  }

module.exports = new Category();
