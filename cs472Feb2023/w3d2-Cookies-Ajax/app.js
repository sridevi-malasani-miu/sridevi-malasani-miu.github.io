const express = require('express');
const app = express();
var path = require("path");
var cookieparser = require('cookie-parser')

app.listen(80, () => {
    console.log('Your Server is running on 80');
})

//Read the parameters from post request
app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let credentials = [{ username: 'shruti', password: 'wap' }, { username: 'john', password: '123' }]

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/html/login.html'))
})
app.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/html/addToList.html'))
})
app.post('/add', function (req, res, next) {
    let fruit = req.body.fruit;
    let cookieArray = req.cookies.array;

    if (cookieArray && cookieArray.length >= 1) {
        if (cookieArray.indexOf(fruit) < 0 && fruit)
            cookieArray.push(fruit);
    }else{
        cookieArray = ['apple', 'banana'];
    }

    res.cookie('array',cookieArray);
    res.send(cookieArray);
})

app.get('/ajaxReq',function(req,res,next){
    if(req.cookies.color && req.cookies.color=='green'){
        req.cookies.color = 'yellow'
    }else if(req.cookies.color && req.cookies.color=='yellow'){
        req.cookies.color = 'green'
    }else{
        req.cookies.color = 'green';
    }
    // Get req.query
    res.cookie('color',req.cookies.color)
    console.log(" Ajax Req");
    res.send(req.cookies)
})

// app.get('/content')
app.post('/login', function (req, res, next) {

    let username = req.body.username;
    let password = req.body.password;

    for (let cred of credentials) {
        if (cred.username == username && cred.password == password)
            res.send('User Already exists')
    }
    credentials.push({ username: username, password: password });
    res.send("success");


})

app.use(function (req, res, next) {
    console.log(" Here ");
    res.send("404")
})



