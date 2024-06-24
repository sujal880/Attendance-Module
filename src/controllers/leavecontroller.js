const Leave = require("../models/leavesmodel");

const LeaveController=async(req,res)=>{
    try{
        const {user,startleavedate,endleavedate,reason,createdat}=req.body;
        if(!user || !startleavedate || !endleavedate || !reason){
            res.status(400).json({
                message:"enter required field's user,startleavedate,endleavedate,reason"
            })
        }
        const data=new Leave({
            startleavedate:startleavedate,
            endleavedate:endleavedate,
            createdat:createdat,
            reason:reason,
            user:user
        });
        const response=await data.save();
        res.status(200).json({
            message:"leave has been created wait for the approval",
            data:response
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}
module.exports=LeaveController;