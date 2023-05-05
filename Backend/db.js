const { default: mongoose } = require('mongoose');
// const mogoose=require('mongoose');
require('dotenv').config();

const connection=mongoose.connect(process.env.mongoURL)
.then(()=>{
  console.log("connected to mongoDB")
})
.catch((err)=>{
    console.log(err)
});

const port=process.env.PORT;


module.exports={connection,port}

