const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000 || process.env.PORT;
app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, ()=>{ 
    console.log(`server is up on Port ${PORT} 🚀`);
})

