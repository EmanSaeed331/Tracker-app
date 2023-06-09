const express = require('express');
const exerciseRouter = express.Router();
const Exercise = require('../models/exercise.model');
exerciseRouter.get('/', (req,res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(err));
});

exerciseRouter.post('/add',(req,res) => {
    const userName = req.body.userName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date
    });
    newExercise.save()
        .then(() => res.json('Exercise added !!'))
        .catch(err => res.status(400).json('error:' + err))
});

module.exports = exerciseRouter;