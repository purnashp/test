const {Schema,model, default: mongoose}=require("mongoose");

const EmployeeSchema = new Schema({

     id:{
        type:String,
        required:true
     },
     image:{
        type:String,
        required:true
     },
     empname:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     mobile:{
        type:String,
        required:true
     },
     desgination:{
         type:[
            {
                type:String,
                enum:["hr","manager","sales"]
            }
         ]
     },
     gender:{
        type:[
            {
                type:String,
                enum:["male","female"]
            }
        ]
     },
     course:{
        type:[
            {
                type:String,
                enum:["mca","bca","bsc"]
            }
        ]
     },
     createdate:{
        type:String,
        required:true
     },
     admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin"
     }
})

const emp = mongoose.model("employee",EmployeeSchema)
module.exports = emp