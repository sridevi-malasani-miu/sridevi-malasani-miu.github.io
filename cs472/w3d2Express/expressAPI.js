const express = require('express');
const app = express();
var path = require("path")

app.listen(80, () => {
    console.log('Your Server is running on 3000');
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
    res.send("Welcome ");
})

app.get("/admin", function (req, res, next) {
    console.log('Admin Landing');
    res.send('<form action="/postData" method="post">Name<input name="name"/> Skill<input name="skill"/><input type="submit" value="submit"/></form>');
});
app.post("/postData", function (req, res, next) {
    console.log('In the post', req.body.name, req.body.skill);
    res.redirect("back")
});

app.get("/view", function (req, res, next) {
    console.log('In the view');
    res.send(" My View")
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "html", "error.html"))
});

