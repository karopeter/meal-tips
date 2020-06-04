const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Comment', commentSchema);
