const express=require('express');
const cartRouter=express.Router();
const auth=require('../middlewares/auth');

const CartModel=require('../models/cart.model');

cartRouter.post('/add',async(req,res)=>{
    try{
        const {image,name,price,discounted_price,offer}=req.body;
        console.log(image,name,price,offer)
             const cart=new CartModel({image,name,price,discounted_price,offer})
             await cart.save();
             console.log('data added successfully')
             res.status(200).send('product added successfully');
         }
         catch(err){
            console.log(err);
            res.send(err);
         }
})

cartRouter.get('/get',async(req,res)=>{
    try{
        const cart=await CartModel.find({user:req.user._id});
    res.status(200).send(cart);
    }
    catch(err){
       console.log(err);
       res.send(err);
    }
    
})


module.exports=cartRouter;
