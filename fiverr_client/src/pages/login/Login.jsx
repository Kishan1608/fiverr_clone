import React, { useState } from 'react'
import newRequest from '../../utils/newRequest';
import {Link, useNavigate} from 'react-router-dom';
import './Login.scss'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/auth/login", {username, password});
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch(err){
      setError(err.response.data);
    }
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
        <p style={{color: 'red', fontWeight: '600'}}>{ error && error }</p>
        <p>Don't have an account? <Link to="/register" className='link' style={{color: '#1dbf73', fontWeight: '600'}}>Register</Link></p>
      </form>
    </div>
  )
}

export default Login