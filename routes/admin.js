//adminrouting
const express = require('express');
const router  = express.Router();
const path = require('path');
const rootDir = require('../utils/path.js');

router.get('/add-product',(req,res,next)=>{  //using only get methods and not post
    // res.send('<h1>Add a Product</h1><form action = "http://localhost:3000/admin/add-product" method = "POST"><input type="text" name="product"/><input type="submit" value="send"/></form>');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})
router.post('/store-product',(req,res,next)=>{      //using app.post inorderr to make this url accept only post data and not get
    console.log('Form Body:',req.body);
    // res.send('Product Submitted Successfully!');
    res.sendFile(path.join(__dirname,'../','views','store-product.html'));
})

module.exports = router;