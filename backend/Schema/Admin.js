const {Schema,model, default: mongoose}=require("mongoose");
const bcrypt = require("bcrypt")
const AdminSchema = new Schema({

    sno:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    employe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employe"
    }
})



AdminSchema.pre("save",async function(){
    let salt=await bcrypt.genSalt(10);    
    this.password = await bcrypt.hash(this.password,salt)
 })
 
 
const admin=mongoose.model("admin",AdminSchema);
module.exports=admin