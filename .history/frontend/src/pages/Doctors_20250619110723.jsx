import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const {speciality} = useParams()
    const {doctors} =useContext(AppContext)

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
            <p>General physician</p>
            <p>Gyen</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default Doctors
