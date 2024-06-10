const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  conditionText: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('historial', HistorySchema)