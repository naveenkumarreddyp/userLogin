const express = require('express');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const data = require('./city');
const cities = require('./models/citydata')


// ---------------- Connecting DataBase ------------
mongoose.connect('mongodb://localhost:27017/cities').then(()=>{
    console.log("db connected sucessfully")
}).catch((err)=>{
    console.log(err)
})


const app = express();
app.use(express.json());



// -----
app.get('/',(req, res) =>{
    res.send('Hello')
});

//--------  For Generating Token ---------------

app.post('/login',(req,res)=>{
    const token = jwt.sign(req.body.email,"keyValue");
    res.status(200).json({
        status:"Token is Successfully Generated",
        token: token
    })
})



const port=4500
app.listen(port, ()=>{
    console.log(`port is listening at ${port}`);
})