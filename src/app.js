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


//feed api =>gt all users data 

app.get("/feed", async(req,res)=>{
    
    try{
        const dataUser = await user.find({})
        if(dataUser.length === 0){
            res.status(400).send("data is not found")
        }
        else{
            res.send(dataUser)
        }
    }
    catch(err){
        res.send("error", err)
    }
})

//findeOne method 

app.get("/users", async(req,res)=>{
    const userEmailId = req.body.emailId 
    try{
        const userD = await user.findOne({emailId:userEmailId})
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

app.patch("/patch", async (req, res) => {
  const { emailId} = req.body.emailId;
  const body = req.body

  try {
    const updatedUser = await user.findOneAndUpdate(
      emailId, body          // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send(updatedUser);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});



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