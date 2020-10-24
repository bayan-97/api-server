// const proudectModel = require('./products/products.schema');
// const proudectModel = require('../');


class Collection {
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
    // if(record.category){

    //   let r2=record.category
    // }
    // let r1=record.name
    // let r3=record. description

console.log("ssscn",record)
    return this.proudectsModel.findByIdAndUpdate(_id,record, { new: true });
  }

  delete(_id) {
    return this.proudectsModel.findByIdAndDelete(_id);
  }
}


module.exports = Collection