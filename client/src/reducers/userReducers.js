import {
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_RESET,
    USER_DELETE_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESET,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_UPDATE_FAIL,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_UPDATE_RESET,
    USER_UPDATE_SUCCESS,
    
  } from "../constants/userConstants";




  export const userSignInReducer = (state = { success: false }, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload, success: true };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  export const userSignUpReducer = (state ={success:false}, action)=>{
    switch(action.type){
      case USER_REGISTER_REQUEST:
        return {loading:true};
      case USER_REGISTER_SUCCESS:
        return {loading:false, userInfo:action.payload, success:true};
      
      case USER_REGISTER_FAIL:
        return {loading:false, error:action.payload};

      default:
        return state;
    }
  }
  

  export const listUserReducer = (state ={loading:true},action)=>{
    switch (action.type){
      case USER_LIST_REQUEST:
        return {loading:true};
      case USER_LIST_SUCCESS:
        return {loading:false, users:action.payload}
      case USER_LIST_FAIL:
        return {loading:false, error:action.payload}
      default:
        return state;
    }
  }
