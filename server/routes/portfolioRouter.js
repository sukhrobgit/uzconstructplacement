import express from 'express';
import expressAsyncHandler from 'express-async-handler';

//! Always add .js at the end of the model db import
import Portfolio from '../models/portfolio.js';


const portfolioRouter = express.Router();




//*CRUD IMPLEMENTATION

//*Create
portfolioRouter.post('/createPortfolioItem', expressAsyncHandler(async(req,res)=>{
    const {title, image, desc} = req.body

    const createPortfolioItem = await new Portfolio({title, image, desc})
    const createPortfolioItemDone = await createPortfolioItem.save()
    res.send({message:"Portfolio item created", portfolioItem:createPortfolioItemDone})
}))


//*Read
portfolioRouter.get('/', expressAsyncHandler(async(req, res)=>{
    const allPortfolio = await Portfolio.find({});
    res.send(allPortfolio)
}))


portfolioRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
    const portfolioItem = await Portfolio.findById(req.params.id);

    if(portfolioItem){
        res.send(portfolioItem)
    } else{
        res.status(404).send({message:'Not Found'})
    }
}))



//* Update

portfolioRouter.put('/:id', expressAsyncHandler(async(req, res)=>{

    const {title, image, desc} = req.body;

    const portfolioItem = await Portfolio.findById(req.params.id)

    if(portfolioItem){
        portfolioItem.title = title;
        portfolioItem.image = image;
        portfolioItem.desc = desc;
        const updatedPortfolioItem = portfolioItem.save()

        res.send({message:'Update Successful', portfolioItem:updatedPortfolioItem})
    } 
}))



//* Delete

portfolioRouter.delete('/:id', expressAsyncHandler(async(req, res)=>{
    
console.log(req.params);
    const portfolioItem = await Portfolio.findById(req.params.id)

    if(portfolioItem){
        const deletePortfolioItem = await portfolioItem.deleteOne()
        res.send({message:'Portfolio item Deleted', portfolioItem:deletePortfolioItem})
    } else{
        res.status(404).send({message:"Not Found Portfolio item to delete"})
    }
}))

export default portfolioRouter
