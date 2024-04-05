import React from 'react'
// import './Pages.css'

const SignupPage = () => {
  return (
    <div className='Login'>
        <div className='details'>
            <label htmlFor="emial id">Email </label>
            <input type="email" /> <br />
            <label htmlFor="password">Password </label>
            <input type="password" /><br />
            <label htmlFor="confirm">Confirm </label>
            <input type="password" /><br />  
            <button type='submit'>submit</button>
        </div>
      
    </div>
  )
}

export default SignupPage
