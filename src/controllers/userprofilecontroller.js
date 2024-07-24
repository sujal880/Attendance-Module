const User = require("../models/usermodel");

const userProfileController=async(req,res)=>{
    const {user}=req.body;
    try{
        if(!user){
            res.status(400).json({
                message:"enter user id"
            })
        }
        const data=await User.findById(user);
        res.status(200).json({
            message:"success",
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=userProfileController;