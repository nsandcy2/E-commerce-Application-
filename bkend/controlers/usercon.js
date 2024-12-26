const um = require("../model/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let add=async(req,res)=>{
    try{
        let hash=await bcrypt.hash(req.body.pwd,10)
        let data=new um({...req.body,"pwd":hash})
        await data.save()
        res.json({"msg":"reg done"})

    }
    catch(err)
    {
        res.json({"msg":"error in reg"})
    }

}

let login=async(req,res)=>{
    try
    {
        let user=await um.findById({"_id":req.body._id})
        if(user)
        {
         let f=await bcrypt.compare(req.body.pwd,user.pwd)
         if(f)
         {
            res.json({"token":jwt.sign({"_id":user._id},"abcd"),"_id":user._id,"name":user.name,"role":user.role})
         }
         else{
            res.json({"msg":"check pwd"})
         }
        }
        else{
            res.json({"msg":"check email"})

        }

    }
    catch(err)
    {
        res.json({"msg":"error in login"})
    }

}
module.exports={add,login}