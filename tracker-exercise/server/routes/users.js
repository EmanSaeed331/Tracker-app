const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.model');

userRouter.get('/',(req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error : '+ err ))
});

userRouter.post('/add',(req, res) => {
   // const userName = req.body.username;
   // const newUser = new User();
    var user = new User({
        userName: req.body.userName,
    });
    user.save()
        .then(() => res.json(' User Added ! '))
        .catch(err => res.status(400).json('Error ' + err));
});
module.exports = userRouter; 