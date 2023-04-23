import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../actions/userActions'
import UserTable from '../../components/UserTable'

function AdminUsers() {
  const dispatch = useDispatch()

  useEffect(()=>{
    
    document.title="Users List"
    dispatch(listUsers())
  }, [dispatch])

   const userList = useSelector((state)=>state.userList);
   const { loading, error, users } = userList;
   console.log(users);

  return (

    <div>
      <h1>AdminUsers</h1>

      <UserTable loading={loading} error={error} users={users} />

      
    </div>
  )
}

export default AdminUsers
