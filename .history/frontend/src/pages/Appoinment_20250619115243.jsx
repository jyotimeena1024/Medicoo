import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appoinment = () => {
    const{docId} = useParams()
    const {doctors} = useContext(AppContext)
    const fetchDocInfo = async() => {
const docInfo = doctors.find(doc => doc._Id === )
    }
  return (
    <div>
      
    </div>
  )
}

export default Appoinment
