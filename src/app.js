const express = require("express")
const connectDB = require("./config/database") // connect database to node js application
const user = require("./models/user.js") // schema and models
const app = express()

app.use(express.json()) // => this is convert json into parse data

//------------------------regristed the data-------------------------

app.post("/signup", async (req, res) => {
    const users = req.body
    try {
        const userData = new user(users)
        userData.save()
        res.send(userData)
    }
    catch (err) {
        res.send(err)
    }
})

//////////--------------get all userdata-------------------------------

app.get("/user", async (req, res) => {

    try {
        const data = await user.find({})
        res.send(data)
    } catch (err) {
        res.send("error", err)
    }
})

////////////-----get one data--------------------------------------------------- 

app.get("/userid", async (req, res) => {
    const emailId = req.query.emailId;  // Use query instead of body for GET

    try {
        if (!emailId) {
            res.status(404).send("User not found");  // Better to send 404
        } else {
            const data = await user.findOne({ emailId: emailId });

            if (!data) {
                res.status(404).send("User does not exist");
            } else {
                res.status(200).send(data);
            }
        }
    } catch (err) {
        res.status(500).send({ error: "An error occurred", details: err.message });
    }
});



//----------------------find by id------------------------------------

app.get("/user/:id", async(req,res)=>{
    const id = req.params.id 
    try{
        if(!id){
            res.status(400).send("id is not found")
        }
        else{
            const data = user.findById(id)
            if(!data){
                res.status(400).send("user is not found")
            }
            else{
                res.status(200).send(data)
            }
        }
    }catch(err){
        res.status(400).send(err)
    }
})


//------------------------updata the data--------------------------findByIdAndUpdata 

app.patch("/update/:id", async(req,res)=>{
    const id = req.params.id
    const body = req.body 
    try{
        if(!id){
            res.status(400).send("user is not found")
        }
        else{
            const data = await user.findByIdAndUpdate(id,body,{new:true})
            if(!data){
                res.status(400).send("user is not found")
            }else{
                res.status(200).send(data)
            }
        }
    }catch(err){
        res.status(400).send(err)
    }
})

//-------------------updata the data-------------------findOneAndUpdate 

app.patch("/updatebyemail", async(req,res)=>{
    const emailId = req.body.emailId
    const body = req.body 
    try{
        if(!emailId){
            res.status(400).send("user is not found")
        }
        else{
            const data = await user.findOneAndUpdate({emailId : emailId}, body, {new:true})
            if(!data){
                res.status(400).send("user is not found")
            }
            else{
                res.status(200).send(data)
            }
        }
    }catch(err){
        res.status(400).send(err)
    }
})

//---------------------------delete the data--------------------------findByIdAndDelete

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        if (!id) {
            return res.status(400).send("User ID is required");
        }

        const data = await user.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).send("User not found");
        }

        res.status(200).send("User deleted successfully");
    } catch (err) {
        res.status(500).send({
            error: "Error deleting user",
            details: err.message,
        });
    }
});



connectDB().then(() => {
    console.log("database is established")
    app.listen(3000, () => {
        console.log("server is running")
    })
}).catch((err) => {
    console.error("database is not connect")
})


//Note => by using findOne its return only first document
//note why means => 