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
                <p>{item.address}</p>
                <p></p>
                <p></p>
                </div>

        </div>
))}
        </div>
      
    </div>
  )
}

export default MyAppoinments
