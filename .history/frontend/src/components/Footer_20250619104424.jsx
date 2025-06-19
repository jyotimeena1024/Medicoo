import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col'>
        {/*...Left section...*/}
        <div>
<img src={assets.logo} alt="" />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/*...center section...*/}
        <div>
            <p>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/*..Right section...*/}
        <div>
           <p>GET IN TOUCH</p> 
           <ul>
            <li>+0-000-000-000</li>
            <li>greatstackdev@gmail.com</li>
           </ul>
        </div>
      </div>
      {/*....CopyRight Text.....*/}
      <div>
        <hr />
        <p>Copyright 2025 @ Greatstack.dev - All Right Reserved.</p>

      </div>
    </div>
  )
}

export default Footer
