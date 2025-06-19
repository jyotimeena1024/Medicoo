import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col '>
      { /*........left side......*/}
      <div>
       <p>
        Book Appointment <br /> With Trusted Doctors
       </p>
       <div>
        <img src ={assets.group_profiles} alt="" />
        <p>Simple browse through our extensive list of trusted doctors, <br/> schedule your appoinment hassle-free.</p>
       </div>
       <a href = "">
         Book appoinment <img src={assets.arrow_icon} alt=""/>
       </a>
      </div>
      { /*.... right side ......*/}
      <div>
       <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
