import express from 'express';
import dotenv from 'dotenv';
import { isAuth } from '../middlewares.js';
import expressAsyncHandler from "express-async-handler";
import multer from "multer";
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk'


const uploadRouter = express.Router();
dotenv.config()

const storage = multer.diskStorage({

destination(req, file, cb){
    cb(null, 'uploads/')
},
filename(req, file, cb){
    cb(null, `${Date.now()}.jpg`)

}

})

const upload = multer({storage})

uploadRouter.post('/', upload.single("image"), (req, res)=>{
    console.log(req.file.path, "HELLOLOL");
    res.send(`/${req.file.path}`)
    console.log(req.file, "Here you gooo");
})

const s3 = new AWS.S3({
    region:process.env.AWS_REGION,

        accessKeyId:process.env.AWS_ACCESS_KEY,
        secretAccessKey:process.env.AWS_SECRET_KEY,
        AWS_SDK_LOAD_CONFIG:process.env.AWS_CONFIG,
   
})

const storageS3 = multerS3({
    s3,
    bucket:process.env.AWS_BUCKET_NAME,
    acl:"public-read",
    contentType:multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb){
        cb(null, file.originalname)
    }
})


const uploadS3 = multer({storage:storageS3})
uploadRouter.post('/s3', uploadS3.single("image"), (req, res)=>{
    console.log(process.env.AWS_ACCESS_KEY, "HAHAHAHAH");
    console.log(req.file, "Here you gooo");
    res.send(req.file.location)
} )






export default uploadRouter
