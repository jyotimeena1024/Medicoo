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
            <hr></hr>
            
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
