const mongoose=require('mongoose');
const OutSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'intimes',
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now,
        required:true
    },
    workdetails:{
        type:String,
        required:true
    }
});

const OutTime=mongoose.model('outtimes',OutSchema);
module.exports=OutTime;