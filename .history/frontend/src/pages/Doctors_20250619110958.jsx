import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const {speciality} = useParams()
    const [filterDoc,setFilterDoc] = useState([])
    const {doctors} =useContext(AppContext)

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
            <p>General physician</p>
            <p>Gyencologist</p>
            <p>Dermatalogist</p>
            <p>Pediatricians</p>
            <p>Neurologist</p>
            <p>Gastroenterologist</p>
        </div>
        <div>
            {

            }
        </div>
      </div>
    </div>
  )
}

export default Doctors
