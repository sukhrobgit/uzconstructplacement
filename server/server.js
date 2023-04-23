import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import path from 'path';

import dotenv from 'dotenv'

import userRouter from "./routes/userRouter.js";
import portfolioRouter from "./routes/portfolioRouter.js";
import uploadRouter from "./routes/uploadRouter.js";
import projectsRouter from "./routes/projectsRouter.js";


dotenv.config()
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const db = process.env.MONGO_DB|| 'mongodb://localhost:27017/sukhrobco';




// const newUser = new User({
//     firstName:'Javokhir',
//     lastName:'Bozorov',
//     email:"javhir@gmail.com",
//     password:bcrypt.hashSync('fsdfsfs'),
//     isAdmin:true
// });

// newUser.save()

const PORT = process.env.PORT || 3001


app.use('/api/user', userRouter)
app.use('/api/portfolio', portfolioRouter )
app.use('/api/uploads', uploadRouter)
app.use('/api/projects', projectsRouter)

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// app.use(express.static(path.join(__dirname, "/client/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/client/build/index.html"))
// );


mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    })
    
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.error('Error Bro:', error)
})



