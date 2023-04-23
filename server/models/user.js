import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false,
        unique:true
    },
    password:{
        type:String,
        required:false,
        
    },
    isAdmin:{
        type:Boolean,
        // required:false
    },

},{ timestamps: true })

const User = mongoose.model("User", userSchema)
export default User;
