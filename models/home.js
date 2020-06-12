const mongoose=require('mongoose');


const listSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Home=mongoose.model('Home',listSchema);
module.exports=Home;