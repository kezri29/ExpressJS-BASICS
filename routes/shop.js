//homepagerouting
const express = require('express');
const router  = express.Router();
const path = require('path');
const rootDir = require('../utils/path.js');

router.get('/',(req,res,next)=>{
    // res.send('<h1>Welcome to our homepage!</h1>');
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
})
module.exports = router;

/*
path.join(__dirname,'../','views','shop.html'
HERE,
path --> a module that is required to specify the path of a folder
join --> this is used to append the file path
__dirname --> this is being used to get the filepath from drive till the folder this js is present
../ --> this is used to jump one step above in the file path i.e, from routes -> express.js basics
views, shop.html -->gets appended from express.js/views/shop.html
*/