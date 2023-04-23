import express from "express";

import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/user.js";
// import { generateToken, isAuth, isAdmin } from "../utils.js";
const userRouter = express.Router();


userRouter.get(
    '/seed', expressAsyncHandler( async (req, res)=>{
        await User.deleteMany({});
        const createdAdminUser = await User.insertMany(data.users)
        res.send({createdAdminUser})
    })
)

userRouter.get('/userData', expressAsyncHandler(async (req,res)=>{
    const data = await User.find({})
    console.log(data);
    res.send(data)
}))


userRouter.post(
    '/signin', expressAsyncHandler( async(req, res)=>{

      const user =  await User.findOne({email:req.body.email});
      if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                isAdmin:user.isAdmin,
                // token:generateToken(user)
            })
            return
        }
    }
res.status(401).send({message:'Invalid login details'})

    })
)


userRouter.post('/signUp', expressAsyncHandler(async(req, res)=>{
        const {firstName, lastName, email, password, isAdmin} = req.body;

        const data = await new User({firstName, lastName, email,password:bcrypt.hashSync(password), isAdmin })
       const user= await data.save()
       res.send({
        _id:user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        isAdmin:user.isAdmin,
        // token:generateToken(user)
    })
    return
} ))

export default userRouter
