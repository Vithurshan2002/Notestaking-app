const express=require('express');
const router=express.Router();
const {userRegister}=require('../Controllers/authController')
router.get('/',userRegister);

module.exports= router;