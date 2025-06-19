import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div>
            <p>ABOUT <span>US</span></p>
        </div>
        <div>
            <img src={assets.about_image} alt="" />
            <div>
                <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                <b>Our Vision</b>
                <p></p>
            </div>
        </div>
      
    </div>
  )
}

export default About
