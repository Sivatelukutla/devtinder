const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    emailId : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    gender : {
        type : String
    }
})

module.exports = mongoose.model("user", userData)