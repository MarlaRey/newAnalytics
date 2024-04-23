import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'

const Layout = () => {

    const links=[
        {name: "Home", link:"home"},
        {name: "About", link:"about"},
        {name: "Gallery", link:"gallery"},
    ]

  return (
    <>
      <Navbar links={links}/>
      <Outlet/>
      <footer></footer>
    </>
  )
}

export default Layout
