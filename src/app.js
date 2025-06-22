const express = require("express")
const app = express()

//user/:userId/:name/:password => req.params
//user => in postman user?userId=101 


app.get("/user/:userId/:name/:password", (req,res)=>{
    console.log(req.params)
    res.send({firstName:"siva", second:"telukutla", age:"25"})
})

app.post("/user", (req,res)=>{
    res.send("successfully the data is save")
})

app.delete("/user", (req,res)=>{
    res.send("successfully the data is delete")
})

app.listen(3000, ()=>{
    console.log("server is running")
})