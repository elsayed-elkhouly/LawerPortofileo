import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <ScrollRestoration />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout