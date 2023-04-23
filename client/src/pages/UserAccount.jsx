import React, { useEffect } from 'react'
import UserProjectModal from './UserProjectModal'
import UserProjectsTable from '../components/UserProjectsTable'
import { useDispatch, useSelector } from 'react-redux'
import { listProjects } from '../actions/projectActions'
import { Link } from 'react-router-dom'

function UserAccount() {

  const dispatch = useDispatch()

  const projectList = useSelector(state => state.userListProject)
  const {projects} = projectList

const logoutHandler = async ()=>{
  await sessionStorage.clear()
  window.location.reload()
}

  useEffect(()=>{
    dispatch(listProjects())
  },[ dispatch ])
  return (
    <div>UserAccount

      <div className="user-project-modal-btn">
        <UserProjectModal/>
        <UserProjectsTable projects={projects}/>


        <Link  onClick={logoutHandler} to={"/home"} className="admin-layout__logout-btn">Logout</Link>
      </div>
    </div>
  )
}



export default UserAccount
