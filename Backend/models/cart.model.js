const mongoose=require('mongoose');


const cartSchema=mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:String,required:true},
    // discounted_price:{type:String,required:false},
    offer:{type:String,required:true}
})


 const CartModel=mongoose.model('cart',cartSchema);

 module.exports=CartModel;

