

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const router = require('./app/routes/note_routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/usergo');

app.use(bodyParser.json()); //parses the input request
app.use(router); //this tells the server to use the routes defined by router which is defined in note_routes

app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error: err.message});
})

const port = 8000;
app.listen(port,()=>{
    console.log('We are live on ' + port);
});


