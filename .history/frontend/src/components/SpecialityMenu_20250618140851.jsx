import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div id='#speciality'>
        <h1>Find By Speciality</h1>
        <p>Simple browse through our extensive list of trusted doctors,  schedule your appoinment hassle-free.</p>
        <div>
{specialityData.map((item,) =>(
    <Link>
    </Link>
))}
        </div>
      
    </div>
  )
}

export default SpecialityMenu
