const express = require('express');
const app = express();
var path = require("path");

app.listen(80, () => {
    console.log('Your Server is running on 80');
})

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let array = ['apple','banana'];

app.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/postData',function(req,res,next){
    res.redirect('back');
})

app.get('/view',function(req,res,next){
    res.send("View");
})
