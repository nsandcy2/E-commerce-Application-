const cm = require("../model/cartmodel")
let {v4:uuidv4}=require("uuid")

let addcart=async(req,res)=>{
    try
    {
        let data=await cm.find({"uid":req.body.uid,"pid":req.body.pid})
        if(data.length==0)
        {
            let cdata=new cm({...req.body,"_id":uuidv4()})
            await cdata.save()
            res.json({"msg":"prod added to cart"})

        }
        else{
           await cm.findByIdAndUpdate({"_id":data[0]._id},{$inc:{"qty":1}})
           res.json({"msg":"prod updated in cart"})
        }

    }
    catch(err)
    {
        res.json({"msg":"error in adding cart"})
    }

}
let getcart=async(req,res)=>{
    try
    {
let data=await cm.find({"uid":req.params.uid})
res.json(data)
    }
    catch(err)
    {

    }

}
module.exports={addcart,getcart}