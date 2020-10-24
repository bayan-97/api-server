
'use strict';
const  CategoryModel = require('./categories.schema.js');

class Collectioncat {
  constructor(model) {
    this.model = model;
  }

  read(_id,name) {
    if (_id && name === undefined) {
      return this.model.findOne({ _id });
    } else if (name !== undefined) {
      return this.model.find({ name });
    } else {
      return this.model.find({});
    }

  }

  create(record) {
    const newRecord = new this.model(record);
    return newRecord.save();
  }
  update(_id, record) {
    let r1=record.name
    let r2=record.display_name
    let r3=record. description
    return this.model.findByIdAndUpdate(_id,{name:r1,display_name:r2,description:r3}, { new: true });
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
