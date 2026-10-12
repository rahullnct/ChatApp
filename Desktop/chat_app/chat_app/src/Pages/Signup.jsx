import React, { useState } from 'react'
import signup_left_side from '../assets/signup_left_side.avif'
import { Eye, EyeOff} from 'lucide-react'
const Signup = ({ onLogin }) => {
    const [formType,setformType]=useState({
        UserName:"",Email:"",password:"",confirm_password:""
    })
    const[showPassword,setShowPassword]=useState(false)
    const[confirmPassword,setConfirmPassword]=useState(false)
    
   function ChangeHandler(event){
    setformType((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
   }

    const SubmitHandler=(event)=>{
        event.preventDefault();
        setformType({
           UserName:"",Email:"",password:"",confirm_password:""
        })
    }
  return (
    <div className='login_wrapper'>
      <div className='login_container'>
         <div className='right_side_container'>
            <h3 className='login_heading'>WelCome to Our Chatapp</h3>
             <p>Lets do some Chats with your best friends and families</p>
            <form onSubmit={SubmitHandler}>
                {/* username */}
                <label className='login_label'>UserName</label>
                <input 
                type='text'
                placeholder='Enter Your UserName'
                name='UserName'
                value={formType.UserName}
                onChange={ChangeHandler}
                />
                {/* email */}
                <label className="login_label">Email</label>

<input
  type="email"
  placeholder="Enter Your Email"
  name="Email"
  value={formType.Email}
  onChange={ChangeHandler}
/>
                {/* pasword */}
                <label className='login_label'>Password</label>
                <div className='show_password_container'>
                   <input 
                type={showPassword ? "text" : "password"}
                placeholder='Enter Your Password'
                name='password'
                value={formType.password}
                onChange={ChangeHandler}
                />
                {
                    showPassword ?  (<EyeOff onClick={()=>setShowPassword(false)}/>):(<Eye onClick={()=>setShowPassword(true)}/>)
                }  
               </div>
               {/* confirm_password */}
                 <label className='login_label'> Confirm Password</label>
                <div className='show_password_container'>
                   <input 
                type={confirmPassword? "text" : "password"}
                placeholder='Enter Your Confirm Password'
                name='confirm_password'
                value={formType.confirm_password}
                onChange={ChangeHandler}
                />
                {
                    confirmPassword ?  (<EyeOff onClick={()=>setConfirmPassword(false)}/>):(<Eye onClick={()=>setConfirmPassword(true)}/>)
                }  
                </div>
            
            <button className='login_btn' onClick={onLogin}>Login</button>
            </form>
            <p className="signup_paragraph">
  Don't have an account?{" "}
  <button
    type="button"
    className="signup_link"
    onClick={onSignup}
  >
    SignUp
  </button>
</p>
         </div>
          <div className='signup_side_container'>
            <img src={signup_left_side} alt='login_left_side_image'/>
           <p className='login_left_side_container'>Users can log in securely using their email/username and password to access the chat dashboard and conversations.</p>
         </div>
      </div>
    </div>
  )
}

export default Signup
