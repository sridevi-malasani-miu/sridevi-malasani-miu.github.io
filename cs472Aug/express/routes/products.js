const express = require('express');
var rootPath = require("../util/path");
var path = require("path");

const router = express.Router();
router.get("/",function(req,res,next){
    res.sendFile(path.join(rootPath,"html","test.html"))
})

module.exports = router;
