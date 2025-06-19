import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "JYOTI MEENA",
        image: assets.profile_pic,
        email: 'jyotiii@gmail.com',
        phone: '+0000-9845-3333',
        address: {
            line1: " 57th Cross,gandhinagar",
            line2: "circle,jaipur,Rajasthan"
        },
        gender: 'Male',
        dob: '2000-01-20'
    })
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div>
            <img src={userData.image} alt="" />
            {
                isEdit
                    ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                    : <p>{userData.name}</p>
            }
            <hr />
            <div>
                <p>CONTACT INFORMATION</p>
                <div>
                    <p>Email id:</p>
                    <p>{userData.email}</p>
                    <p>Phone:</p>
                    {
                        isEdit
                            ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                            : <p>{userData.phone}</p>
                    }
                    <p>Address:</p>
                    {
                        isEdit
                    }
                </div>
            </div>



        </div>
    )
}

export default MyProfile
