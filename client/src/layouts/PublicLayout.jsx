import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarGen from '../components/NavbarGen'
import Footer from '../components/Footer'

function PublicLayout() {
  return (
    <>
    <NavbarGen/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default PublicLayout
