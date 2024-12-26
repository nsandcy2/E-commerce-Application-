let mongoose=require("mongoose")
let cartsch=new mongoose.Schema({
    "_id":String,
    "uid":String,
    "pid":String,
    "name":String,
    "price":Number,
    "qty":Number,
    "pimg":String
})
let cm=mongoose.model("prodcart",cartsch)
module.exports=cm