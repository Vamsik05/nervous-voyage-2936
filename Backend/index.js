const express = require('express');
const cors=require('cors');
const {connection,port}=require('./db');
require('dotenv').config();

const app=express();

app.use(express.json());
app.use(cors())

app.listen(port,async()=>{
    try{
       await connection;
    }catch(err){
        console.log(err);
    }
    console.log(`server started at port:${port}`);
})