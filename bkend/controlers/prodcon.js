let multer=require("multer")
let {v4:uuidv4}=require("uuid")
const pm = require("../model/prod")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './prodimgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })


let add=async(req,res)=>{
    try
    {
        let data=new pm({...req.body,"pimg":req.file.filename,"_id":uuidv4()})
       await data.save()
       res.json({"msg":"prod added"})
    }
    catch(err)
    {
        res.json({"msg":"error in adding prod"})
    }

}
let getprod=async(req,res)=>{
    try{
        let data=await pm.find()
        res.json(data)

    }
    catch(err)
    {
        res.json({"msg":"error in getting prod"})
    }

}

module.exports={add,upload,getprod}