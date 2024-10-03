const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  file: { type: String },
  answers: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

module.exports = mongoose.model('Question', questionSchema);
