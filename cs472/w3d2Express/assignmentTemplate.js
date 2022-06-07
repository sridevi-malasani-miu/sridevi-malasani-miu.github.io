const express = require('express');
const app = express();
var path = require("path");

let storedData;

app.listen(80, () => {
    console.log('Your Server is running on 3000');
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/add", function (req, res, next) {
    res.sendFile(path.join(__dirname, "domAssignment.html"))
});

app.post("/add", function (req, res, next) {
    console.log('In the post', req.body.name, req.body.skill);
    storedData = req.body;
    res.redirect("/view")
});

app.get("/view", function (req, res, next) {
    console.log('In the view');
    res.send(" <label>Name: "+storedData.checkboxValue+"</label><label>RadioButton: "+storedData.radioBtnValue+"</label>")
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "html", "error.html"))
});

