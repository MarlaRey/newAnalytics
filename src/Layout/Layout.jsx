import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

    const links=[
        {name: "Home", link:"home"},
        {name: "About", link:"about"},
        {name: "Gallery", link:"gallery"},
    ]

  return (
    <>
    <nav>
        <ul>
            {links.map((link, index)=>{
            return( 
            <li>
            <NavLink to={link.link} key={index}>{link.name}</NavLink>
            </li>)
        })}</ul>
    </nav>
      <Outlet/>
      <footer></footer>
    </>
  )
}

export default Layout
