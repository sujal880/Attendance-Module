const mongoose=require('mongoose');
const inSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    createat:{
        type:Date,
        default:Date.now
    }
});
const InTime=mongoose.model('intimes',inSchema);
module.exports=InTime;