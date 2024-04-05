import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='Login'>
        <div className='details'>
            <label htmlFor="username">USERNAME  </label>
            <input type="text" /> <br />
            <label htmlFor="Password">PASSWORD  </label>
            <input type="password" /><br />
            <button>Forget Password</button>
            <button>Login</button> <br />
           <Link to="/signUp"> <button>Sign up</button></Link>

        </div>
    </div>
  )
}

export default LoginPage

