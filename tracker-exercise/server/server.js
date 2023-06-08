const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());

// Mongoose Connection 
// Atlas URI 
mongoose.connect(process.env.ATLAS_URI , { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open',() => { 
    console.log("MONGO DATABASE connection established successfully ");
})
app.listen(PORT, ()=>{ 
    console.log(`server is up on Port ${PORT} 🚀`);
})

