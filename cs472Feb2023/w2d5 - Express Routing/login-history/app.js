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
let credentials = [{username:'shruti',password:'wap'}, {username:'john',password:'123'}]

app.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'/html/login.html'))
})
app.get('/add',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'/html/addToList.html'))
})
app.post('/add', function (req,res,next){
    let fruit = req.body.fruit;
    if(array.indexOf(fruit)<0 && fruit)
        array.push(fruit);
    res.send(array);
})

app.post('/login', function (req,res,next){
    
    let username = req.body.username;
    let password = req.body.password;

    for(let cred of credentials){
        if(cred.username==username && cred.password==password)
            res.send('User Already exists')
    }
    credentials.push({username:username,password:password});
    res.send("success");

   
})

app.use(function(req,res,next){
    console.log(" Here ");
    res.send("404")
})



