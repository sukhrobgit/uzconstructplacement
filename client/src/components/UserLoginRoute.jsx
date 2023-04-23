import React from 'react'
import {Outlet, } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Home from '../pages/Home'

function UserLoginRoute() {


    const userSignIn = useSelector((state)=>state.userSignIn)
    const userInfo=  userSignIn.userInfo
  return userInfo? <Outlet/> : <Home/>
}

export default UserLoginRoute
