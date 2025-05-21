{const express=require('express');
const router=express.Router();
const {userRegister}=require('../Controllers/authController')

router.post('/',userRegister);



module.exports=router;}