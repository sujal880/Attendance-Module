const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const secretkey='shbdikjikswfhdkihbkiusikgbkiagdbkisgiksf';
const verifytoken=async(req,res,next)=>{
    try{
        const token=req.headers['authorization'];
        if(!token){
            return res.status(400).json({
                message:"No token provided"
            })
        }
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                return res.status(500).json({
                    message:"Failed to authenticate user"
                })
            }
            req.user=decoded;
            next();
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=verifytoken;