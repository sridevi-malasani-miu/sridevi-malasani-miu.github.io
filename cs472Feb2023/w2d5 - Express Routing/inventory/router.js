const express = require('express');
const path = require('path');
const options = {
    "caseSensitive": true,
    "strict": true
};
const router = express.Router(options);
let products = [];

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'/product.html'))
});

router.post('/update', (req, res, next) => {
    console.log('In the middleware!',req.body);
    
    if(req.body.action=='delete'){
        for(let i=0;i<products.length;i++){
            if(products[i].productName==req.body.productName){
                products.splice(i,1);
                break;
            }
        }
    }else if(req.body.action=='edit'){
        for(let product of products){
            if(product.productName==req.body.productName){
                product.price=req.body.price;
                break;
            }
        }
    }
    else{
        products.push(req.body);
    }
    console.log(products)
    res.redirect('/product/list');
});

router.get('/list', (req, res, next) => {
    console.log(req.body);
   res.send(products)
});


module.exports = router;
