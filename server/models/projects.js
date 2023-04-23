import mongoose from "mongoose";


const projectsSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true,
    },
    title:{
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
    },
    projectInfo:{
        type:String,
        required:false,

    },
    projectStatus:{
        type:String,
        required:true,
    }


})


const Project = mongoose.model('Project', projectsSchema);

export default Project;
