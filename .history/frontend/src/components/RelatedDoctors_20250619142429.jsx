import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({speciality,docIduse}) => {
    const {doctors} = useContext(AppContext)
    const[relDoc,setRelDocs] =useState([])
  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctors
