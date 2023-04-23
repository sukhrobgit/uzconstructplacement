import { PORTFOLIO_FETCH_FAIL, PORTFOLIO_FETCH_REQUEST, PORTFOLIO_FETCH_SUCCESS, PORTFOLIO_ITEM_CREATE_FAIL, PORTFOLIO_ITEM_CREATE_REQUEST, PORTFOLIO_ITEM_CREATE_RESET, PORTFOLIO_ITEM_CREATE_SUCCESS, PORTFOLIO_ITEM_FETCH_REQUEST, PORTFOLIO_ITEM_UPDATE_FAIL, PORTFOLIO_ITEM_UPDATE_REQUEST, PORTFOLIO_ITEM_UPDATE_RESET, PORTFOLIO_ITEM_UPDATE_SUCCESS } from "../constants/portfolioConstants";



export const createPortFolioItemReducer = (state = {success:false}, action)=>{
    switch(action.type){
        case PORTFOLIO_ITEM_CREATE_REQUEST:
            return {loading:true};
        
        case PORTFOLIO_ITEM_CREATE_SUCCESS:
            return {loading:false, success:true};
        
        case PORTFOLIO_ITEM_CREATE_FAIL:
            return {loading:false, error:action.payload};
        
        case PORTFOLIO_ITEM_CREATE_RESET:
            return {};
        default:
            return state
    }
}


export const portfolioListReducers = (state = {portfolio:[]}, action) =>{
    switch(action.type){
        case PORTFOLIO_FETCH_REQUEST:
            return  {loading:true};
        
        case PORTFOLIO_FETCH_SUCCESS:
            return {loading:false, portfolio:action.payload};

        case PORTFOLIO_FETCH_FAIL:
            return {loading:false, error:action.payload.error};
        
        default:
            return state
    }
}


export const portfolioUpdateReducer = (state ={}, action) =>{
    switch(action.type){
        case PORTFOLIO_ITEM_UPDATE_REQUEST:
            return {loading:true};

        case PORTFOLIO_ITEM_UPDATE_SUCCESS:
            return {loading:false, success:true}

        case PORTFOLIO_ITEM_UPDATE_FAIL:
            return {loading:false, error:action.payload};

        case PORTFOLIO_ITEM_UPDATE_RESET:
            return {};
        
        default:
            return state
    }
}
