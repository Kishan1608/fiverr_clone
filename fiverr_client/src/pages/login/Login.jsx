import React, { useState } from 'react'
import './Login.scss'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className='login'>
      <form action="" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' placeholder='johndoe' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" name='password' onChange={e=>setPassword(e.target.value)}/>

        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login