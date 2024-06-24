const InTime = require("../models/inmodel");

const InController=async(req,res)=>{
    try{
        const {user,createdat}=req.body;
        if(!user){
            res.status(400).json({
                message:"enter userid"
            })
        }
        const data=new InTime(
            {
                user:user,
                createat:createdat
            }
        );
        const response=await data.save();
        res.status(200).json({
            message:"Marked as In",
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=InController;