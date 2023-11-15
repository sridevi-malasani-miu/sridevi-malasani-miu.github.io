const express = require('express');
const app = express();

var path = require("path");
var ejs = require("ejs");

app.listen(80, () => {
    console.log('Your Server is running on 3000');
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
// app.set('views', path.join(__dirname,"myDir"));

app.get("/admin", function (req, res, next) {
    res.render("myFile",  { list: {name:"Jane",age:20, skills:['java','javascript']}})
});
