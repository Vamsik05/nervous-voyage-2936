const { default: mongoose } = require('mongoose');
const mmongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    moblie_No:{type:Number,require:true},  
    


})