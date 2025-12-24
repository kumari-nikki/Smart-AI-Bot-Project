import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../App.css'

const Login = () => {
  return (
    <div className='login-form'>
    

      <form  className='login-form' onSubmit={(e) => e.preventDefault()}>
        <div className="heading">
          <h2>LogIn</h2>
        </div>

        <div className="account">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="forlogin">
          <p>
            If you have to create account? <Link to="/">Signup</Link>
          </p>
        </div>

        <button type="submit">LogIn</button>
      </form>
    </div>
  )
}

export default Login
