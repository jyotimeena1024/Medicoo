import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px'>
        {/*.....Left side .....*/}
        <div>
<div>
    <p>Book Appointment</p>
    <p>With 100+ Trusted Doctors</p>
</div>
<button>Create account</button>
        </div>
         {/*.....Right side .....*/}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>
      
    </div>
  )
}

export default Banner
