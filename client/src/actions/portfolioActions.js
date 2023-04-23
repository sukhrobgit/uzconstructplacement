import axios from "axios";
import { PORTFOLIO_FETCH_SUCCESS, PORTFOLIO_FETCH_FAIL, PORTFOLIO_ITEM_CREATE_FAIL, PORTFOLIO_ITEM_CREATE_REQUEST, PORTFOLIO_ITEM_CREATE_SUCCESS, PORTFOLIO_ITEM_FETCH_REQUEST, PORTFOLIO_ITEM_UPDATE_REQUEST, PORTFOLIO_ITEM_UPDATE_SUCCESS, PORTFOLIO_ITEM_UPDATE_FAIL, PORTFOLIO_ITEM_DELETE_FAIL, PORTFOLIO_ITEM_DELETE_REQUEST, PORTFOLIO_ITEM_DELETE_SUCCESS } from "../constants/portfolioConstants";



//Create

export const createPortfolioItem = (title, image, desc) =>{
    return async(dispatch, getState)=>{
        dispatch({
            type:PORTFOLIO_ITEM_CREATE_REQUEST,
            payload:{title, image, desc},
        });
        const {userSignIn:{userInfo},} = getState();

        try{
            const {data} = await axios.post('/api/portfolio/createPortfolioItem',{title, image, desc})
            dispatch({type:PORTFOLIO_ITEM_CREATE_SUCCESS, payload:data})
        } catch(error){
            const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;

            dispatch({type:PORTFOLIO_ITEM_CREATE_FAIL, payload:message})
        }
        
    }
}


//Read

export const listPortfolioItem = ()=>{
    return async(dispatch)=>{
        dispatch({type:PORTFOLIO_ITEM_FETCH_REQUEST})

        try{
            const {data} = await axios.get('/api/portfolio')
            dispatch({type:PORTFOLIO_FETCH_SUCCESS, payload:data})
        } catch(error){
            dispatch({type:PORTFOLIO_FETCH_FAIL, payload:error.message})
        }
    }
}


//Update

export const updatedPortfolioItem = (portfolioItemId, title, image, desc)=>{
    return async (dispatch, getState)=>{
        dispatch({
            type:PORTFOLIO_ITEM_UPDATE_REQUEST,
            payload:{title, image, desc}
        });
    
        const {userSignIn:{userInfo},} = getState();
    
        try{
            const {data} = await axios.put(`/api/portfolio/${portfolioItemId}`,
            {title,image, desc}, 
            {headers: {Authorization: `Bearer ${userInfo.token}`}}
            )
            dispatch({type:PORTFOLIO_ITEM_UPDATE_SUCCESS, payload:data})
        }catch(error){
            const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          dispatch({ type: PORTFOLIO_ITEM_UPDATE_FAIL, payload: message });
        }
    }
  
}


// Delete

export const deletePortfolioItem = (portfolioItemId) =>{
    return async (dispatch, getState)=>{
        dispatch({type:PORTFOLIO_ITEM_DELETE_REQUEST, payload:portfolioItemId})
        const {
            userSignIn:{userInfo}
        } = getState()

        try{
        const {data} = await axios.delete(`/api/portfolio/${portfolioItemId}`, {
            // headers:{Authorization:`Bearer ${userInfo.token}`}
        })
        dispatch({type:PORTFOLIO_ITEM_DELETE_SUCCESS, payload:data})
            

        }catch(error){
            const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({type:PORTFOLIO_ITEM_DELETE_FAIL, payload:message})
        }
    }
}
