import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {listUserReducer, userSignInReducer, userSignUpReducer,} from "./reducers/userReducers";
import { createPortFolioItemReducer, portfolioListReducers, portfolioUpdateReducer } from './reducers/portfolioReducers';
import { createUserProjectReducer, listUserProjectReducer, updateUserProjectReducer } from './reducers/projectReducers';




  const initialState = {
    userSignIn: {
      userInfo: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : null,
    }, 
  };
  
  const reducer = combineReducers({
    userSignIn: userSignInReducer,
    projectItemCreate: createPortFolioItemReducer,
    portfolioList: portfolioListReducers,
    portflioItemUpdate: portfolioUpdateReducer,
    userList:listUserReducer,
    userRegister: userSignUpReducer,
    userCreateProject: createUserProjectReducer,
    userListProject: listUserProjectReducer,
    userUpdateProject: updateUserProjectReducer
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;
  