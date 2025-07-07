import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoinments from './pages/MyAppoinments'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className ='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path ='/' element ={<Home />} />
          <Route path ='/doctors' element ={<Doctors />} />
           <Route path ='/doctors/:speciality' element ={<Doctors />} />
            <Route path ='/login' element ={<Login />} />
             <Route path ='/about' element ={<About />} />
              <Route path ='/contact' element ={<Contact />} />
               <Route path ='/my-profile' element ={<MyProfile />} />
                <Route path ='/my-appointments' element ={<MyAppoinments />} />
                 <Route path ='/appoinment/:docId' element ={<Appoinment />} />

      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
