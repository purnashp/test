const EmployeeSchema = require("../Schema/Employe");

exports.Createemploye=async(req,res)=>{
    try{

        let emp = {
            id:req.body.id,
            empname:req.body.empname,
            email:req.body.email,
            mobile:req.body.mobile,
            desgination:req.body.desgination,
            gender:req.body.gender,
            course:req.body.course,
            createdate:req.body.createdate
        }
        let payload = await EmployeeSchema.create(emp);
        res
        .status(201)
        .json({success:true,message:"Successfully registred",payload})
    }
    catch(err){
        console.log(err);
    }

}