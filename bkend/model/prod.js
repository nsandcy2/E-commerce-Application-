let mongoose=require("mongoose")
let prodsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "cat":String,
    "price":String,
    "desc":String,
    "comm":[],
    "pimg":String
})
let pm=mongoose.model("prod",prodsch)
module.exports=pm