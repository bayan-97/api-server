const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, require: true },
  category: { type: String, required: true },
  description: {
    type: String,
    required: true, 
  },
});

module.exports = mongoose.model('product', product);