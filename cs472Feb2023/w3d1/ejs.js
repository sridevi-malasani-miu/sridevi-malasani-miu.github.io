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

app.get("/form", function (req, res, next) {
    let form = { name: 'Ram', age: '30', skills:{ list: ['java', 'javascript'] ,value:'javascript'}}
    // !!!!!!!Not this !!!!!! res.render('index',list)
    res.render("form", { obj: form })
});

app.get("/preview", function (req, res, next) {
    let form = {
        name: { value: 'Ram', isEdit: false },
        age: { value: 30, isEdit: true }, skills: {value:'javascript', list: ['java', 'javascript'], isEdit: false }
    }
    res.render("preview", { obj: form })
});

