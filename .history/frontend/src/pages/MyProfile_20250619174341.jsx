import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const[userData,setUserData] = useState({
        name:"JYOTI MEENA",
        image:assets.profile_pic,
        email :'jyotiii@gmail.com',
        phone:'+0000-9845-3333',
        address:{
            line1:" 57th Cross,gandhinagar",
            line2:""
        }
    })
  return (
    <div>

      
    </div>
  )
}

export default MyProfile
