import { PROJECT_FETCH_FAIL, PROJECT_FETCH_REQUEST, PROJECT_FETCH_SUCCESS, PROJECT_ITEM_CREATE_FAIL, PROJECT_ITEM_CREATE_REQUEST, PROJECT_ITEM_CREATE_RESET, PROJECT_ITEM_CREATE_SUCCESS, PROJECT_ITEM_UPDATE_FAIL, PROJECT_ITEM_UPDATE_REQUEST, PROJECT_ITEM_UPDATE_RESET, PROJECT_ITEM_UPDATE_SUCCESS } from "../constants/projectConstants";

export const createUserProjectReducer = (state = {success:false}, action)=>{
    switch(action.type){
        case PROJECT_ITEM_CREATE_REQUEST:
            return {loading:true};
        
        case PROJECT_ITEM_CREATE_SUCCESS:
            return {loading:false, success:true};
        
        case PROJECT_ITEM_CREATE_FAIL:
            return {loading:false, error:action.payload};
        
        case PROJECT_ITEM_CREATE_RESET:
            return {};
        default:
            return state
    }
}
export const listUserProjectReducer = (state = {projects:[]}, action) =>{
    switch(action.type){
        case PROJECT_FETCH_REQUEST:
            return  {loading:true};
        
        case PROJECT_FETCH_SUCCESS:
            return {loading:false, projects:action.payload};

        case PROJECT_FETCH_FAIL:
            return {loading:false, error:action.payload.error};
        
        default:
            return state
    }
}


export const updateUserProjectReducer = (state={}, action)=>{
    switch(action.type){
        case PROJECT_ITEM_UPDATE_REQUEST:
            return {loading:true};

        case PROJECT_ITEM_UPDATE_SUCCESS:
            return  {loading:false, success:true};

        case PROJECT_ITEM_UPDATE_FAIL:
            return {loading:false, payload:action.payload}

        case PROJECT_ITEM_UPDATE_RESET:
            return {};

        default:
            return state;
    }
}
