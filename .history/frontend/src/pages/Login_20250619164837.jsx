import React, { useState } from 'react'

const Login = () => {
    const [state,setState] = useState('Sign Up')
    const [email,setEmail] =  useState('')
    const [password,setPassword] = useState('')
    const[name,setName] = useState('')
    const onSubmitHandler = async(event) => {
event.preventDefault()

    }
  return (
   <form className='min-h-[80vh]'>

   </form>
  )
}

export default Login
