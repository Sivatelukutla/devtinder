const express = require("express")
const app = express()

//user/:userId/:name/:password => req.params
//user => in postman user?userId=101 

//mutlipule route handler 
//"/user" => it is a rout 
//(req,res,next) => it is a route handler 
//if responsd is empty.the response state is pending 

app.get("/user", [(req,res,next)=>{
    // res.send("user data 1") => if first response is empty its go to second response
    next()
},(req,res, next)=>{
    res.send("user data 2") //in the last response don't use next() function its give error
}])

app.listen(3000, ()=>{
    console.log("server is running")
})