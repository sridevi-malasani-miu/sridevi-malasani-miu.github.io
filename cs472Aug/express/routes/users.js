const express = require('express');
const router = express.Router();
router.use(function(req,res,next){
    console.log(" Always run for users");
    next();
})
router.get("/",function(req,res,next){
    res.send("User Routes")
})

module.exports = router;
