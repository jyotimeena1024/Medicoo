import React from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const {speciality} = useParams()
    const {doctors} =useContext(AppContext)

  return (
    <div>
      
    </div>
  )
}

export default Doctors
