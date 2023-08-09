const express = require('express');
const app = express();

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(80, function() {
    
    console.log('Your Server is running');
});

app.get('/edit',function(req,res,next){
    console.log("edit get 1")
})
app.post('/edit',function(req,res,next){
    console.log("edit post")
})

app.get('/edit',function(req,res,next){
    console.log(" edit get 2")
})


app.use("/edit",function(req,res,next){
    console.log(" app.use /edit  3 ");
})

app.use(function(req,res,next){
    console.log(" app.use 4 ");
    res.send("welcome")
})




