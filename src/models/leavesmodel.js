const mongoose=require('mongoose');
const leaveSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    startleavedate:{
        type:String,
        required:true
    },
    endleavedate:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }
});
const Leave=mongoose.model('leaves',leaveSchema);
module.exports=Leave;