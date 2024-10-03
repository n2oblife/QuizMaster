const Score = require('../models/score');

exports.submitScore = async (req, res) => {
  try {
    const score = new Score(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getScoresByQuizId = async (req, res) => {
  try {
    const scores = await Score.find({ quiz: req.params.id }).populate('user', 'username');
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add more controller functions as needed
