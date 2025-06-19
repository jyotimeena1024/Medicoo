import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink>
            <li> HOME</li>
            <hr />
            <NavLink>
            <li> ALL DOCTORS</li>
            <hr />
            <NavLink>
            <li> ABOUT</li>
            <hr />
            <NavLink>
            <li>CONTACT</li>
            <hr />
            
        </NavLink>
      </ul>
      <div
    </div>
  )
}

export default Navbar
