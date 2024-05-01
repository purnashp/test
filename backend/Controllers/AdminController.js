const AdminController = require("../Schema/Admin");
const bcrypt = require("bcrypt")
exports.CreateAdmin = async(req,res)=>{
    const {username,password}=req.body
    const user = await AdminController.find({username});
    if(user){
        return res.status(400).json("Username already taken")
    }
    let payload = await AdminController.create(req.body);
    res
    .status(201).json({success:true,message:"ADMIN IN REGISTRED",payload})
}

exports.LoginAdmin = async(req,res)=>{
   
    try{
        const {username,password}=req.body
        if (!username || !password) {
            res
                .status(401)
                .json({ success: false, message: "Enter the fill the both Felids" })
        }
        let user = await AdminController.findOne({ username }).select("+password");

        if (!user) {
            res
                .status(401)
                .json({ success: false, message: "User Not-Matched" })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
                res
                    .status(401)
                    .json({ success: false, message: "Password Not-Matched" });
        }
        res
        .status(201)
        .json({success:true,message:"LOGIN SUCCESSFULLY",user})
    
    }
    catch(err){
        console.log(err);
    }
    
    
}