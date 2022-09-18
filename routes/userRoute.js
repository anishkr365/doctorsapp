const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel')
router.post('/register',async(req,res)=>{
    try{
        const userExists = await User.findOne({email:req.body.email});
        console.log(email);
        if(userExists){
           return res.status(200).send({message:"User already present",success:false});
        }
     const password = req.body.password;
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password,salt);
     req.body.password = hashPassword;
     const newuser = new User(req.body);
     await newuser.save();
     res.status(200).send({message:"User created successfully",success:true});

    }
    catch (error){
     console.log(error)
    }
})

router.post('/login',async(req,res)=>{
    try{
  const user = await User.findOne({email:req.body.email});
  console.log(req.body.email)
  if(!user){
    return res
    .status(200)
    .send({message:"User does not exist",success:false});
  }
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if(!isMatch){
    return res
    .status(200)
    .send({message:"Password doesnt match",success:false});
  }
  else{
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{ expiresIn:"1d",});
    res.status(200)
    .send({message:"Login successfull",sucess:true, data:token})
  }
    }
    catch (error){
    console.log(error)
    res.status(500)
    .send({messsage:"Error in creating in user", success:false,error})
    }
})
module.exports = router;