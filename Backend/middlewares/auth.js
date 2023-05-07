const jwt=require('jsonwebtoken');


const auth=(req,res,next)=>{
const token=req.headers.authorization;
if(token){
    try{
        const decoded=jwt.verify(token,'article');
        if(decoded){
            req.body.user=decoded.user;
            req.body.userID=decoded.userID;
            next();
        }else{
            res.send({'err':err.message});
        }
    }
    catch(err){
        res.send({'err':err.message});
     }
}

else{
    res.send('Please Login!')
}
}

module.exports=auth;