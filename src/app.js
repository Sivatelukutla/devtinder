const express = require("express")
const app = express()

//user/:userId/:name/:password => req.params
//user => in postman user?userId=101 

//mutlipule route handler 
//"/user" => it is a rout 
//(req,res,next) => it is a route handler 
//if responsd is empty.the response state is pending 

// app.get("/user", [(req,res,next)=>{
//     // res.send("user data 1") => if first response is empty its go to second response
//     next()
// },(req,res, next)=>{
//     res.send("user data 2") //in the last response don't use next() function its give error
// }])

app.use("/", (req,res, next)=>{
    const auth = "xyz";
    if(auth !== "xyz"){
        res.send("user is not auth")
    }
    else{
        next()
    }
})

app.get("/user", (req,res)=>{
    res.send("user data")
})

app.post("/user/postdata", (req,res)=>{
    res.send("user post is kk")
})

app.put("/user/putdata", (req,res)=>{
    res.send("the data is updated")
})

app.delete("/user/deletedata", (req,res)=>{
    res.send("user is delete")
})

app.listen(3000, ()=>{
    console.log("server is running")
})