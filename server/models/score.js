const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: { type: Number, required: true },
});

module.exports = mongoose.model('Score', scoreSchema);
