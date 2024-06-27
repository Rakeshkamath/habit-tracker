const Habit = require('../models/Habit');

exports.getAllHabits = async (req, res) => {
  const habits = await Habit.find();
  res.render('index', { habits });
};

exports.addHabit = async (req, res) => {
  const { name } = req.body;
  const newHabit = new Habit({ name, records: [] });
  await newHabit.save();
  res.redirect('/');
};

exports.updateHabitStatus = async (req, res) => {
  const { id, date, status } = req.body;
  const habit = await Habit.findById(id);

  const recordDate = new Date(date); // Ensure date is a valid Date object
  if (isNaN(recordDate)) {
    return res.status(400).send('Invalid date');
  }

  const validStatuses = ['None', 'Done', 'Not done'];
  if (!validStatuses.includes(status)) {
    return res.status(400).send('Invalid status');
  }

  const record = habit.records.find(r => r.date.toISOString().split('T')[0] === date);
  if (record) {
    record.status = status;
  } else {
    habit.records.push({ date: recordDate, status });
  }

  await habit.save();
  res.redirect('/');
};
