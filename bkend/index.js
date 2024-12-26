let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let bodyParser=require("body-parser")
const ur = require("./routes/userroutes")
const pr = require("./routes/prodroutes")

let app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({"extended":true}))
app.use(cors())
app.use("/prodimgs",express.static("./prodimgs"))
mongoose.connect("mongodb://127.0.0.1:27017/fsdecom").then(()=>{
    console.log("ok")
})
app.use("/",ur)
app.use("/",pr)

app.listen(5000)
