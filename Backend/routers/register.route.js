const express=require('express');

const registerRouter=express.Router();
// const User=require('../models/user');
const loginRouter=express.Router();

registerRouter.post('/register',async(req,res)=>{
      const {name,email,password,mobile_no}=req.body;
     
})




module.exports={registerRouter,loginRouter}