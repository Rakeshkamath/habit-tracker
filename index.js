
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/habit_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const habitRoutes = require('./routes/habits');
app.use('/', habitRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
