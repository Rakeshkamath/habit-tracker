
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: String,
  records: [{
    date: Date,
    status: String
  }]
});

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;
