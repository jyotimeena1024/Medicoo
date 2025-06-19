import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center '>
      <h1>Top Doctors to Book</h1>
      <p>Simple browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0,10).map((item,index)=>(
<div>
    <img src={item.image} alt="" />
    <div>
        <div>
            <p></p><p>Availabe</p>
            </div>
            <p>{item.name}</p>
            <p>{item.speciality}</p>
        </div>
    </div>
        ))}
      </div>
      <button>more</button>
    </div>
  )
}

export default TopDoctors
