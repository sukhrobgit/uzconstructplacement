import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    }
})


const Team = mongoose.model('Team', teamSchema);

export default Team;
