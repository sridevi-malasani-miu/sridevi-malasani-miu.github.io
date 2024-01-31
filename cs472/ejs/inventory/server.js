var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(80, function () {
    console.log(" Server Listening")
})
let products = [];

app.get('/', function (req, res, next) {
    res.render('inventory',
        { products: products })
})
let id = 1;
app.post('/', function (req, res, next) {
    console.log(req.body);
    if (req.body.action == 'add') {
        let product = {
            itemId: id++, itemName: req.body.itemName,
            itemPrice: req.body.itemPrice, itemQuantity: req.body.itemQuantity
        }
        products.push(product)
    }

    else if (req.body.action == 'edit') {
        for (let product of products) {
            if (product.itemId == req.body.itemId) {
                product.itemName = req.body.itemName;
                product.itemPrice = req.body.itemPrice
                product.itemQuantity = req.body.itemQuantity
            }
        }
    }else{
        for (let i=0;i<products.length;i++) {
            if (products[i].itemId == req.body.itemId) {
                products.splice(i,1);
                break;
            }
        } 
    }

    res.redirect('back');
})
