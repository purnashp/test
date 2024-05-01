const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/Employee"

exports.connectedDb = async()=>{
    await mongoose.connect(url)
    console.log("Database is Connected");
}