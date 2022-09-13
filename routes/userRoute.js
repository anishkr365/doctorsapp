const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require('../models/userModel')
router.post('/register',async(req,res)=>{
    try{
        const userExists = await User.findOne({email:req.body.email});
        if(userExists){
           return res.status(200).send({message:"User already present",success:false});
        }
     const password = req.body.password;
     const salt = bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password,salt);
     req.body.password = hashPassword;
     const newuser = new User(req.body);
     await newuser.save();
    return res.status(200).send({message:"User created successfully",success:true});

    }
    catch (error){

    }
})

router.post('/login',async(req,res)=>{
    try{

    }
    catch (error){

    }
})
module.exports = router;