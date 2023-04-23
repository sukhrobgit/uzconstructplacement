import express from 'express'
import dotenv from 'dotenv'
import expressAsyncHandler from 'express-async-handler';
import Project from '../models/projects.js';


const projectsRouter = express.Router()


//* CRUD

//* Create 

projectsRouter.post('/createProject', expressAsyncHandler(async(req, res)=>{
    const {userId, title, image, desc, projectInfo, projectStatus } = req.body
    const createProject = await new Project({userId, title, image, desc, projectInfo, projectStatus});
    const createProjectDone = await createProject.save();
    res.send(createProjectDone)
}))


//* Read

projectsRouter.get('/', expressAsyncHandler(async(req,res)=>{
    const projects = await Project.find({})

    res.send(projects)

}))


//get by id

projectsRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
    const projectId = req.params.id

    const getProject = await Project.findById({projectId})

    if(getProject){
        res.send(getProject)
    } else{
        res.send("Not found")
    }
}))


//* Update
projectsRouter.put('/:id', expressAsyncHandler(async(req,res)=>{
    const {projectId,image,title,desc,address,status } = req.body
    console.log(title, image, desc, address, 'this is REQ BODYY');
    // const projectId = req.params.id
    const projectUpdate = await Project.findById(projectId)
    console.log(projectUpdate, "UPDATE");
    if(projectUpdate){
        projectUpdate.title = title;
        projectUpdate.image = image;
        projectUpdate.desc = desc;
        projectUpdate.projectInfo = address;
    
    const projectEditDone = await projectUpdate.save()
    res.send(projectEditDone)
    }
}))


//* Delete

projectsRouter.delete('/:id', expressAsyncHandler(async(req, res)=>{
 const projectId = req.params.id
console.log(req.params, "THIS IS DEL ID");
    const projectItem = await Project.findById(projectId)

    if(projectItem){
        const delProject = await Project.deleteOne()
        res.send({message:"Project Deleted", deletedProject: delProject})
    } else{
        res.send({message:"Not found"})
    }
}))









// userId:{
//     type:String,
//     required:true,
// },
// title:{
//     type:String,
//     required:true,

// },
// image:{
//     type:String,
//     required:true,

// },

// desc:{
//     type:String,
//     required:true,
// },
// projectInfo:{
//     type:String,
//     required:true,

// },
// projectStatus:{
//     type:String,
//     required:true,
// }


export default projectsRouter;
