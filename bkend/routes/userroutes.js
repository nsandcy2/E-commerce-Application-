let express=require("express")
const { add, login } = require("../controlers/usercon")
let ur=new express.Router()
ur.post("/reg",add)
ur.post("/login",login)
module.exports=ur