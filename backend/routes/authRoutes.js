const express=require('express');
const router=express.Router();
const {userRegister}=require('../Controllers/authController')
router.post('/auth/register',userRegister);

module.exports= router;