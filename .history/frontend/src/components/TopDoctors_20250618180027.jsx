import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simple browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0,10).map((item)=>(


        ))}
      </div>
    </div>
  )
}

export default TopDoctors
