const express = require('express');
const router = express.Router();
const Task = require('../models/tasks')

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', {
        tasks
    });
});


router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send('recived');
});

module.exports = router;