    const express = require("express")
const connectDB = require("./config/database")
const user = require("./models/user.js")
const app = express()

app.use(express.json())

app.post("/signup", async(req,res)=>{
    // console.log(req.body)
    const users = new user(req.body)
    try{
        await users.save()
        res.send("user is created successfully")
    }
    catch{
        res.status(400).send("error")
    }
})

app.get("/user", async(req,res)=>{
    const userEmailId = req.body.emailId 
    try{
        const userD = await user.find({emailId:userEmailId})
        if(userD.length === 0){
            res.status(400).send("user is not found")
        }
        else{
            res.send(userD)
        }
    }catch(err){
        res.status(400).send("error", err)
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



