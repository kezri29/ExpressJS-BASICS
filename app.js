const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use('/third',(req,res,next)=>{
//     console.log('First Middleware');
//     next();
// })
// app.use('/second',(req,res,next)=>{
//     console.log('Second Middleware');
//     next(); //next is used to go from one middlware to the next
// })
// app.use('/',(req,res,next)=>{
//     console.log('Third Middleware');
//     res.send('<p>Hi From Kesari</p>');
// })
// const server = http.createServer(app);  instead of the normal createserver method used in nodejs we use app listen in express
// server.listen(3000); no need for to use http module like in nodejs


app.use(express.static(path.join(__dirname,'public')));  //this is being used to input static css files along with the html files
app.use(bodyParser.urlencoded());
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));  //404 error sending for not defined url entry
})
app.listen(3000);
