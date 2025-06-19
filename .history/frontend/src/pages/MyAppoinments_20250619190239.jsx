import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {
    const {doctors} = useContext(AppContext)

  return (
    <div>
        <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
        <div>
{doctors.slice(0,2).map((item,index) => (
    <div className='grid grid-cols-[1fr_2fr' key={index}>
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
                        <button>Pay Online</button>
                        <button>Cancel appointment</button>

        </div>
))}
        </div>
      
    </div>
  )
}

export default MyAppoinments
