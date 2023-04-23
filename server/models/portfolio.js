import mongoose from "mongoose";


const portfolioSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }

})


const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio
