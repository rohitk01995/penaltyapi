const express = require('express')
const app = express();
const mongoose = require('mongoose');
const route = require('./routes');

require('dotenv/config');


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log('connected to db')
);

app.use(express.json())
app.use(route)
app.listen(4000, ()=>{
    console.log('listening on port 4000');
})