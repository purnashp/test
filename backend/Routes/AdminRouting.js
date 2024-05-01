const {Router}= require("express");
const { CreateAdmin, LoginAdmin } = require("../Controllers/AdminController");
const router = Router();
router.post("/register",CreateAdmin);
router.post("/login",LoginAdmin)

module.exports = router