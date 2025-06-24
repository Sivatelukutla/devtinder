const express = require("express")
const connectDB = require("./config/database")
const user = require("./models/user.js")
const app = express()

app.use(express.json())

// app.post("/signup", async(req,res)=>{
//     const users = req.body 
//     try{
//         const userData = new user(users)
//         userData.save()
//         res.send(userData)
//     }
//     catch(err){
//         res.send(err)
//     }
// })

//////////--------------get all userdata-------------------------------

app.get("/user", async(req,res)=>{
    
    try{
        const data = await user.find({})
        res.send(data)
    }catch(err){
        res.send("error", err)
    }
})





connectDB().then(()=>{
    console.log("database is established")
    app.listen(3000, ()=>{
    console.log("server is running")
    })
}).catch((err)=>{
    console.error("database is not connect")
})


//Note => by using findOne its return only first document 
//note why means => 