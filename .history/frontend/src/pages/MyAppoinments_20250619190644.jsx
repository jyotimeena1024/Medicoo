import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {
    const {doctors} = useContext(AppContext)

  return (
    <div>
        <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
        <div>
{doctors.slice(0,2).map((item,index) => (
    <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
        <div>
            <img className='w-32 bg-indigo-50' src={item.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p><span className='text-sm'>Date & Time:</span>12, JUNE,2025 | 8:30PM</p>
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
