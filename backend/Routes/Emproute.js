const {Router}= require("express");
const router = Router();


const { Createemploye } = require("../Controllers/EmpController");

router.post("/addemp",Createemploye)
module.exports = router;