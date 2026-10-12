import React, { useState } from 'react'
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
const Auth = () => {
    const[isSignup,setIsSignup]=useState(false)
  return (
    <div className="auth_wrapper">

      <div className={`auth_slider ${isSignup ? "active" : ""}`}>

        <div className="auth_page">
          <Login onSignup={() => setIsSignup(true)} />
        </div>

        <div className="auth_page">
          <Signup onLogin={() => setIsSignup(false)} />
        </div>

      </div>

    </div>
  );
}

export default Auth
