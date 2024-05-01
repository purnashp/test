const express = require("express");
const app = express();
const {connectedDb}= require("./Module/db")
connectedDb()
const adminrouting= require("./Routes/AdminRouting");
const emprouting = require("./Routes/Emproute");
app.use(express.json());
app.use("/auth",adminrouting);
app.use("/auth/emp",emprouting)

app.listen(5000,err=>{
    if(err) throw err;
    console.log("SERVER IS RUNNING");
})