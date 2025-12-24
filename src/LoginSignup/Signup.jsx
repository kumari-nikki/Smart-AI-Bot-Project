import React from 'react'
import { Link } from 'react-router-dom'
import manpic from '../assets/Man pic.png'

const Signup = () => {
  return (
 <div className="wholeBox">
    <div className="signup-container">
      <form>
        <div className='heading'>
          <h2>Signup</h2>
        </div>

        <div className="account">
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input type="password" name="password" placeholder="Enter your password" />
        </div>

        <div className="forlogin">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <button>Sign Up</button>
      </form>

      <div className="right-section">
        <img src={manpic} alt="image"/>
      </div>
    </div>
    </div>
  )
}

export default Signup
