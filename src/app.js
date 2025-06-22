const express = require("express")
const app = express()


app.get("/", (req,res)=>{
    res.send("this is Home Page")
})

app.get("/set", (req,res)=>{
    res.send("this is Set Data")
})

app.listen(3000, ()=>{
    console.log("server is running")
})