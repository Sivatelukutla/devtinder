const express = require("express")
const connectDB = require("./config/database")
const user = require("./models/user.js")
const app = express()

app.post("/signup", async(req,res)=>{
    const userData = {
        firstName : "sivaprasad",
        lastName : "thelukutla",
        emailId : "sivaprasad@gmail.com",
        password : "siva@1358"
    }
    const users = new user(userData)
    await users.save()
    res.send("user is created successfully")
})


connectDB().then(()=>{
    console.log("database is established")
    app.listen(3000, ()=>{
    console.log("server is running")
    })
}).catch((err)=>{
    console.error("database is not connect")
})



