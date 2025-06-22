const express = require("express")
const app = express()


app.get("/user", (req,res)=>{
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