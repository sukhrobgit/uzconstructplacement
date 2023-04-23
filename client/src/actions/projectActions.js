import axios from 'axios'
import { PROJECT_FETCH_FAIL, PROJECT_FETCH_REQUEST, PROJECT_FETCH_SUCCESS, PROJECT_ITEM_CREATE_FAIL, PROJECT_ITEM_CREATE_SUCCESS, PROJECT_ITEM_DELETE_FAIL, PROJECT_ITEM_DELETE_REQUEST, PROJECT_ITEM_DELETE_SUCCESS, PROJECT_ITEM_FETCH_FAIL, PROJECT_ITEM_UPDATE_REQUEST } from '../constants/projectConstants'


//*Create
export const createProjectItem = (userId, title, image, desc, projectInfo, projectStatus)=>{
    return async(dispatch, getState)=>{

        dispatch({type:PROJECT_ITEM_DELETE_REQUEST, payload:{userId, title, image, desc, projectInfo, projectStatus}})

        try{
            const {data} = axios.post('/api/projects/createProject', {userId, title, image, desc, projectInfo, projectStatus})
            dispatch({type:PROJECT_ITEM_CREATE_SUCCESS, payload:data})
        }catch(error){

            dispatch({type:PROJECT_ITEM_CREATE_FAIL, payload:error})
        }

    }
}


//* Read
export const listProjects = ()=>{
    return async(dispatch)=>{
        dispatch({type:PROJECT_FETCH_REQUEST})
        try{
            const {data} = await axios.get('/api/projects/');
            dispatch({type:PROJECT_FETCH_SUCCESS, payload:data})
        

        }catch(error){
            dispatch({type:PROJECT_FETCH_FAIL, payload:error})
        }
    }
}


//* Update


export const updateProjects = (projectId,image,title,desc,address,status)=>{
    return async(dispatch)=>{
        dispatch({type:PROJECT_ITEM_UPDATE_REQUEST, payload:{projectId, image,title,desc,address,status}})
    
        try{

            const {data} = await axios.put(`/api/projects/${projectId}`,
            {projectId,image,title,desc,address,status} )
            dispatch({type:PROJECT_FETCH_SUCCESS, payload:data})
        }catch(error){
            dispatch({type:PROJECT_ITEM_FETCH_FAIL, payload:error})
        }

    }

}

//*Delete

export const delProject = (projectId) =>{
    return async(dispatch)=>{

        dispatch({type:PROJECT_ITEM_DELETE_REQUEST,  payload:projectId})

        try{
            const {data} = await axios.delete(`/api/projects/${projectId}`)
            dispatch({type:PROJECT_ITEM_DELETE_SUCCESS, payload:data})
        }catch(error){
                    const message = error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
                    dispatch({type:PROJECT_ITEM_DELETE_FAIL, payload:message})
                }
    }
}

// export const deletePortfolioItem = (portfolioItemId) =>{
    // return async (dispatch, getState)=>{
    //     dispatch({type:PORTFOLIO_ITEM_DELETE_REQUEST, payload:portfolioItemId})
    //     const {
    //         userSignIn:{userInfo}
    //     } = getState()

    //     try{
    //     const {data} = await axios.delete(`/api/portfolio/${portfolioItemId}`)
    //     dispatch({type:PORTFOLIO_ITEM_DELETE_SUCCESS, payload:data})
            

    //     }catch(error){
    //         const message = error.response && error.response.data.message
    //         ? error.response.data.message
    //         : error.message;
    //         dispatch({type:PORTFOLIO_ITEM_DELETE_FAIL, payload:message})
    //     }
    // }

