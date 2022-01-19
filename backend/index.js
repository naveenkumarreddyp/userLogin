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
    });
});

// -------------- Sending data to DataBase ------------

app.post('/cities', async (req,res)=>{
    try{
        const CityData = await cities.insertMany(data)
        res.status(200).json({
            Status:"Added Sucessfully",
            cities:CityData
        })
    }
    catch(err){
        res.status(400).json({
            Status: "Failed",
            message: err.message
        })
    }
});

// data.forEach(element => {
//     city = new cities(element).save().then().catch(err=>{
//         console.log(err)
//     })
// });


const port=4500
app.listen(port, ()=>{
    console.log(`port is listening at ${port}`);
})