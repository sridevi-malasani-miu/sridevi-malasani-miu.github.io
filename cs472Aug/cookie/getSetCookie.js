const express = require('express');
const app = express();
const cookieParse = require("cookie-parser");
var path = require("path");
var ejs = require("ejs");

app.listen(80, () => {
    console.log('Your Server is running on 3000');
})
//Read the parameters from post request
app.use(cookieParse('salt'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
// app.set('views', path.join(__dirname,"myDir"));


app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.get("/changeCookie", function (req, res, next) {
    console.log(" In Landing ", req.cookies)
    console.log('Admin Landing', req.query);
    res.send("<form action='/admin' method='post'>MyName<input name='myName'/>Set Cookie<input name='cookieValue'/><input type='submit'/>")
});
app.get("/updateCookie", function (req, res, next) {
    //Change string
    if(req.cookies.name=='Earth')
        res.cookie('name',req.cookies.name+'Update')
    else
        res.cookie('name','New name')

    //Update speed by 30
    let speed = req.cookies.speed;
    res.cookie('speed',+speed+30);

    //Update Array
    let planets = req.cookies.planets;
    if(planets.length>3)
        planets.pop();
    else   
        planets.push("Venus");
    res.cookie("planets",planets);

    //Update Objects
    let prefs = req.cookies.prefs;
    if(prefs.color=='white')
        delete prefs.search;
    else   
        prefs.search.push("color")
    res.cookie("prefs",prefs);
    res.send(req.cookies)

});

//Read Cookies
app.post("/setCookie", function (req, res, next) {
    // Set Cookie
    res.cookie("name", req.body.group);

    //Set Cookie only if it is not present
    if (!req.cookies?.booleanVar)
        res.cookie('booleanVar', true);

    //Set Integer value
    res.cookie('speed', req.body.speed);

    //Set Object
    let preferences = {
             color: req.body.color, history: 'off' , 
            search: ['software', 'spirituality']
    }
    res.cookie('prefs', preferences)

    //Set array
    res.cookie('planets',req.body.planets)
        res.send(req.cookies)
});


