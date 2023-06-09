const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.model');

userRouter.get('/',(req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error : '+ err ))
});

userRouter.post('/add',(req, res) => {
    var user = new User({
        userName: req.body.userName,
    });
    user.save()
        .then(() => res.json(' User Added ! '))
        .catch(err => res.status(400).json('Error ' + err));
});
userRouter.get('/:id', (req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:' +err));
});

userRouter.patch('/:id' , (req,res) => { 
    User.findByIdAndUpdate(req.params.id)
        .then(user =>  { 
            user.userName = req.body.userName;
            user.save()
                .then(() => res.json('user updated'))
                .catch(err => res.status(400).json(err))
        }).catch(err => res.status(400).json('Error' + err));
});

userRouter.delete('/:id' , (req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted Successfully '))
    .catch(err => res.status(400).json('Error :' + err ))
})
module.exports = userRouter; 