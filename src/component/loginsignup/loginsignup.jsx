import React, { useState } from 'react'
import './loginsignup.css'
import user_icon from '../asset/person.png'
import email_icon from '../asset/email.png'
import password_icon from '../asset/password.png'
const LoginSignup =() =>{
   const [action,setAction]=useState("Signup");
    return  (
        <div>
        <div className='container'>
            <div className='header'>
             <div className='text'>{action}</div>
             <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:
                    <div className="input">
                        <img src={user_icon} alt=" " />
                        <input type="text" placeholder='Name' />
                    </div>}
                    
                    <div className="input">
                        <img src={email_icon} alt=" " />
                        <input type="email" placeholder='Email id' />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=" " />
                        <input type="password" placeholder='password' />
                    </div>
                    {action==="Signup"?<div></div>:<div className="passwordj">Forgot password?<span>click here</span></div>}
            </div>
            
            <div className="submit_container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Signup")}>Signup</div> 
            <div className={action==="Signup"?"submit gray":"submit"}onClick={()=>setAction("Login")}>Login</div>
            </div>
       </div>
       </div>
    );
}
export default LoginSignup
