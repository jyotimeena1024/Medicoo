import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
      </div>
      <div>
        <img src={assets.contact_image} alt="" />
        <div>
            <p>OUR OFFICE</p>
            <p>00000 Willms Station 
Suite 000, Washington, USA</p>
            <p>Tel: (000) 000-0000</p>
            <p>Email: greatstackdev@gmail.com</p>
            <p>CAREERS AT PRESCRIPTO</p>
            <button></button>
        </div>
      </div>
    </div>
  )
}

export default Contact
