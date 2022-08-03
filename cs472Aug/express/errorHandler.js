const express = require('express');
const { fstat } = require('fs');
const app = express();
var path = require("path");

app.listen(80, () => {
    console.log('Your Server is running on 80');
})
//Read the parameters from post request
app.use(express.json());
app.use(function(req,res,next){
    
    if(req.query.user && req.query.user=='guest')
        res.send("403");
    else
        next();
})
app.use(express.urlencoded({ extended: false }));

var router = require("./app")
console.log(router)
app.get('/',router.getFn)

app.post('/post',router.postFn)
app.get('/preview',router.viewFn);
var fs = require("fs");

app.use(function(req,res,next){
    console.log(" All Handler");
    fs.readFile('./index.html',function(o,e){
        console.log(" Here after read",o,e);
        if(e)
            next(e)
        // try{
        //     let d = x/5;
        // }catch(err){
        //     console.log(" Here error")
        //     next(err)
        // }
        
    })
    console.log(" Hello")
    res.sendFile(path.join(__dirname,"404.html"))
    // console.log(" Hello");
})
app.use(function(err,req,res,next){
    console.log(" Error 1")
   next(err);
})

app.use(function(err,req,res,next){
    console.log(" Error 2")
    next(err);
    // res.send(err.stack);
})
