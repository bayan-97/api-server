
'use strict';
const  CategoryModel = require('./categories.schema.js');

class Collectioncat {
  constructor(model) {
    this.model = model;
  }
  // get(_id, category) {
  //   if (_id && category === undefined) {
  //     return this.model.findOne({ _id });
  //   } else if (category !== undefined) {
  //     return this.model.find({ category });
  //   } else {
  //     return this.model.find({});
  //   }
  // }

  read(_id,name) {
    if (_id && name === undefined) {
      return this.model.findOne({ _id });
    } else if (name !== undefined) {
      return this.model.find({ name });
    } else {
      return this.model.find({});
    }
    
    // const query = _id ? { _id } : {};
 
    // return this.model.find(query);
  }

  create(record) {
    const newRecord = new this.model(record);
    return newRecord.save();
  }
  update(_id, record) {
    let r1=record.name
    let r2=record.category
    let r3=record. description
    return this.model.findByIdAndUpdate(_id,{name:r1,category:r2,description:r3}, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

class Category extends Collectioncat {
    constructor() {
      super(CategoryModel);
    }
  
   
  }

module.exports = new Category();
