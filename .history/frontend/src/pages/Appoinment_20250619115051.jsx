import React from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appoinment = () => {
    const{docId} = useParams()
    const {doctors} = useContext(AppContext)
    const fetch
  return (
    <div>
      
    </div>
  )
}

export default Appoinment
