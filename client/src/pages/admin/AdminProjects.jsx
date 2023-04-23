import React, { useEffect } from 'react'
import UserProjectsTable from '../../components/UserProjectsTable'
import { useSelector } from 'react-redux'

function AdminProjects() {

  const {projects} = useSelector(state => state.userListProject)
  useEffect(()=>{
    
  },[projects])
  return (
    <div>

      <UserProjectsTable projects={projects}/>
    </div>
  )
}

export default AdminProjects
