let express=require("express")
const { upload, add, getprod } = require("../controlers/prodcon")
const { addcart, getcart } = require("../controlers/cartcon")

let pr=new express.Router()
pr.post("/add",upload.single('pimg'),add)
pr.get("/getprod",getprod)
pr.post("/addcart",addcart)
pr.get("/getcart/:uid",getcart)
module.exports=pr