import axios from "axios";
import {
  LOGOUT_USER,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";


export const signIn = (email, password) => {
    return async (dispatch) => {
      dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
      try {
        const { data } = await axios.post("/api/user/signin", {
          email,
          password,
        });
        setTimeout(() => {
          dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
          // if (keepSigned) {
            sessionStorage.setItem("userInfo", JSON.stringify(data));
          // }
        }, 1000);
      } catch (error) {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };



  export const signUp = (firstName, lastName, email, password, isAdmin) =>{
    return async(dispatch)=>{
      dispatch({type:USER_REGISTER_REQUEST, payload:{firstName, lastName, email,  password, isAdmin}});
      try{
        const {data} = await axios.post('/api/user/signUp',{
          firstName,
          lastName,
          email,
          password,
          isAdmin,
        })
        setTimeout(()=>{
          dispatch({type:USER_REGISTER_SUCCESS, payload:data})

        },1000)

      } catch(error){
        dispatch({type:USER_REGISTER_FAIL, payload: 
        error.response && error.response.data.message ? error.response.data.message : error.message})
      }
    }
  }




  export const listUsers = ()=>{
    return async(dispatch)=>{
      dispatch({type:USER_LIST_REQUEST})
      try{
        const {data} = await axios.get('/api/user/userData')
        dispatch({type:USER_LIST_SUCCESS, payload:data})
      }catch(error){
        dispatch({type:USER_LIST_FAIL, payload:error.message})
      }
    }
    
  }
