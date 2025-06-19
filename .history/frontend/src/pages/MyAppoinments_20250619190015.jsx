import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {
    const {doctors} = useContext(AppContext)

  return (
    <div>
        <p>My appointments</p>
        <div>
{doctors.slice(0,2).map((item,index) => (
    <div key={index}>
        <div>
            <img src={item.image} alt="" />
            </div>
            <div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
                <p>Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p><span>Date & Time:</span>12, JUNE,2025 | 8:30PM</p>
                </div>
                <div>

                    </div>
                    <div>
                        </div>
                        button

        </div>
))}
        </div>
      
    </div>
  )
}

export default MyAppoinments
