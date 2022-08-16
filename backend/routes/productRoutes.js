const express = require("express")
const upload = require("../utils/multer")
const { addproduct } = require("../controllers/productControlers")
const router = express.Router()
   
router.post("/addproduct",upload("products").single("file"),addproduct)
module.exports=router  