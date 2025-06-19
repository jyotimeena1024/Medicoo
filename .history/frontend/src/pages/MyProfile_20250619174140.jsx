import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const[userData,setUserData] = useState({
        name:"JYOTI MEENA",
        image:assets.profile_pic,
        email :'jyotiii@gmail.com',
        phone:''
    })
  return (
    <div>

      
    </div>
  )
}

export default MyProfile
