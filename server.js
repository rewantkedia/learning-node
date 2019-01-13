

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const router = require('./app/routes/note_routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/usergo');

app.use(bodyParser.json());
app.use(router);


const port = 8000;
app.listen(port,()=>{
    console.log('We are live on ' + port);
});

