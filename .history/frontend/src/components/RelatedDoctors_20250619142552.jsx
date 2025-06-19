import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors} = useContext(AppContext)
    const[relDoc,setRelDocs] =useState([])
    useEffect(() =>{
        if(doctors.length)

    },[doctors,speciality,docId])
  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctors
