const express = require('express');
const app = express();
var path = require("path");

app.listen(80, () => {
    console.log('Your Server is running on 80');
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req,res,next){
    throw new Error(" Error");
})
app.use(function(error,req,res,next){
    console.log(" Here  Handler 2");
    res.send(error.stack())
})

