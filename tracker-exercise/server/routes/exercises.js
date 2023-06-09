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

exerciseRouter.get('/:id', (req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error:' +err));
});

exerciseRouter.patch('/:id' , (req,res) => { 
    Exercise.findByIdAndUpdate(req.params.id)
        .then(exercise =>  { 
            exercise.userName = req.body.userName;
            exercise.duration = Number(req.body.duration);
            exercise.description = req.body.description;
            exercise.date = Date.parse(req.body.date);
            exercise.save()
                .then(() => res.json('exercise updated'))
                .catch(err => res.status(400).json(err))
        }).catch(err => res.status(400).json('Error' + err));
});

exerciseRouter.delete('/:id' , (req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted Successfully '))
    .catch(err => res.status(400).json('Error :' + err ))
})

module.exports = exerciseRouter;