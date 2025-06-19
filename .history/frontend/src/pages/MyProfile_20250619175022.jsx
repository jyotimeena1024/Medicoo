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
            line2:"circle,jaipur,Rajasthan"
        },
        gender:'Male',
        dob:'2000-01-20'
    })
    const [isEdit,setIsEdit]= useState(true)
  return (
    <div>
        <img src={userData.image} alt="" />
        {
            isEdit 
            ? <input type="text" onChange={e=> setUserData(prev => ({...prev,name:}))} />
            : <p>{userData.name}</p>
        }


      
    </div>
  )
}

export default MyProfile
