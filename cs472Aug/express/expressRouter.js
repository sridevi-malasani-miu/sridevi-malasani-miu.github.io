const express = require('express');
const app = express();
var path = require("path")
var userRoutes = require('./routes/users.js')
var productRoutes = require('./routes/products.js')
app.listen(80, () => {
    console.log('Your Server is running on 80');
})
//Read the parameters from post request
console.log(path.join(__dirname, 'public', 'css'))
app.use(express.static(path.join(__dirname, 'public', 'css')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user',userRoutes)
app.use('/product',productRoutes)


