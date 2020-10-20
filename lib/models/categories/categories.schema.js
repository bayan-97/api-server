const mongoose = require('mongoose');

const categoriy = mongoose.Schema({
  name: { type: String, require: true },
  display_name: { type: String, required: true },
  description: {
    type: String,
    required: true, 
  },
});

module.exports = mongoose.model('categoriy', categoriy);
