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
   <form className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-3 m-auto items-start'>
        <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please  {state === 'Sign Up' ? "sign up " : "log in"} to book appointment</p>
        <div>
            <p>Full name</p>
            <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
          <div>
            <p>Email</p>
            <input type="email" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
          <div>
            <p>Password</p>
            <input type="password" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <button>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
    </div>

   </form>
  )
}

export default Login
