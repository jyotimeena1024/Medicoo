import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors} = useContext(AppContext)
    const[relDoc,setRelDocs] =useState([])
    useEffect
  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctors
