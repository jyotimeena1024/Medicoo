import React from 'react'
import { useParams } from 'react-router-dom'

const Appoinment = () => {
    const{docId} = useParams()
    const {doctors} = useContext
  return (
    <div>
      
    </div>
  )
}

export default Appoinment
