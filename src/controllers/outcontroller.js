const OutTime = require("../models/outmodel");

const OutController=async(req,res)=>{
    try{
        const {user,workdetails,createdat}=req.body;
        if(!user || !workdetails){
            res.status(400).json({
                message:"enter workdetails"
            })
        }
        const data=new OutTime({
            user:user,
            createdat:createdat,
            workdetails:workdetails
        });
        const response=await data.save();
        res.status(200).json({
            message:"Marked as OUT",
            data:response
        })
    }

    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=OutController;