
const express = require('express');
const router = express.Router();
const HabitController = require('../controllers/HabitController');

router.get('/', HabitController.getAllHabits);
router.post('/add', HabitController.addHabit);
router.post('/update', HabitController.updateHabitStatus);

module.exports = router;
