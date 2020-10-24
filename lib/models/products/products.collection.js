
'use strict';
const proudectModel = require('./products.schema.js');

class Collectionprod {
  constructor(proudectsModel) {
    this.proudectsModel = proudectsModel;
  }

  read(_id,name) {
    if (_id && name === undefined) {
      return this.proudectsModel.findOne({ _id });
    } else if (name !== undefined) {
      return this.proudectsModel.find({ name });
    } else {
      return this.proudectsModel.find({});
    }

  }

  create(record) {
    const newRecord = new this.proudectsModel(record);
    return newRecord.save();
  }
  update(_id, record) { 
    let r1=record.name
    let r2=record.category
    let r3=record. description

console.log("ssscn",record)
    return this.proudectsModel.findByIdAndUpdate(_id,{name:r1,category:r2,description:r3}, { new: true });
  }

  delete(_id) {
    return this.proudectsModel.findByIdAndDelete(_id);
  }
}


class Product extends Collectionprod {
    constructor() {
      super(proudectModel);
    }
  
   
  }

module.exports = new Product();