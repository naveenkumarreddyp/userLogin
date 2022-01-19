const mongoose =require("mongoose");


const citiesSchema = new mongoose.Schema ({
    id : { type: String},
    name : {type: String},
    state : {type:String}
})

const cities = mongoose.model('city',citiesSchema)

module.exports = cities