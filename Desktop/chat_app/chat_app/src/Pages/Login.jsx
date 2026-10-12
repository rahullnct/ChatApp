import { useState } from 'react'
import login_image from '../assets/login_image.png'
import { Eye, EyeOff} from 'lucide-react'
const Login = ({ onSignup }) => {
    const [formState,setformState]=useState({
        userName:"",password:""
    })
    const [showPassword, setShowPassword]=useState(false)

    const SubmitHandler=(event)=>{
        event.preventDefault()
        setformState({
            userName:"",
            password:""
        })
    }
    function changeHandler(event){
       setformState((prev)=>({
        ...prev,
        [event.target.name]:event.target.value
       }))
    }
  return (
    <div className='login_wrapper'>
      <div className='login_container'>
         <div className='left_side_container'>
            <img src={login_image} alt='login_left_side_image'/>
           <p className='login_left_side_container'>Users can log in securely using their email/username and password to access the chat dashboard and conversations.</p>
         </div>
         <div className='right_side_container'>
            <h3 className='login_heading'>WelCome Again</h3>
             <p>Lets do some Chats with your best friends and families</p>
            <form onSubmit={SubmitHandler}>
                <label className='login_label'>UserName</label>
                <input 
                type='text'
                placeholder='Enter Your UserName'
                name="userName"
                value={formState.userName}
                onChange={changeHandler}
                />
                <label className='login_label'>Password</label>
                <div className='show_password_container'>
                   <input 
                type={showPassword ? "text" : "password"}
                placeholder='Enter Your Password'
                name="password"
                value={formState.password}
                onChange={changeHandler}
                />
                {
                    showPassword ?  (<EyeOff onClick={()=>setShowPassword(false)}/>):(<Eye onClick={()=>setShowPassword(true)}/>)
                }  
                </div>
            
           <button type="submit" className="login_btn">
  Login
</button>
            </form>
            <p className='signup_paragraph'>You are new on this App then <span className='signup_link'>SignUp</span></p>
         </div>
      </div>
    </div>
  )
}

export default Login