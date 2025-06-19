import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {
    const {doctors} = useContext(AppContext)

  return (
    <div>
        <p>My appointments</p>
        <div>
{doctors.slice}
        </div>
      
    </div>
  )
}

export default MyAppoinments
