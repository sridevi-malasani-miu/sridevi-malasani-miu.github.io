const express = require('express');
const app = express();
var path = require("path");

app.listen(80, function() {
    console.log('Your Server is running on 3000');
});

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", function (req, res, next) {
    res.send("Welcome to MIU ");
})

app.get("/admin", function (req, res, next) {
    console.log('Admin Landing');
    res.send('<form action="/postData" method="post">Name<input name="name"/> Skill<input name="skill"/><input type="submit" value="submit"/></form>');
});
app.post("/postData", function (req, res, next) {
    console.log('In the post', req.body.name, req.body.skill);
    res.send({name:req.body.name,skill: req.body.skill})
});


app.get("/index", function (req, res, next) {
    console.log('In the view',path.join(__dirname));
    res.sendFile(path.join(__dirname,"html","index.html"));
});
