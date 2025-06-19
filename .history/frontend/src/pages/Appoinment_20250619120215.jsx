import React,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appoinment = () => {
    const{docId} = useParams()
    const {doctors} = useContext(AppContext)
    const[docInfo,setDocInfo]= useState(null)

    const fetchDocInfo = async() => {
const docInfo = doctors.find(doc => doc._id === docId)
setDocInfo(docInfo)
    }
    useEffect(()=>{
fetchDocInfo()
    },[doctors,docId])
  return docInfo && (
    <div>
        {/*......Doctor Details ......*/}
        <div>
            <div>
<img src={docInfo.image} alt="" />
            </div>
            <div>
                {/*....DocInfo :name,degree,experience.....*/}
                <p>{</p>
            </div>
        </div>
      
    </div>
  )
}

export default Appoinment
