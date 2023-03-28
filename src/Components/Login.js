import React from 'react'
import Navbar from './Navbar'
import login from '../CssFiles/Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  function redirectToRegistration(){
    navigate('/registration')
  }
  return (
    <div>
       <Navbar/>
       <div className={login.loginForm}>
        
       <img className={login.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOyr2YYhlHIx7MKwO-Gyu_sxyVfD9OTXcVw&usqp=CAU" alt="registraationimgae" />
       <input className={login.username} type="text" placeholder='USERNAME' />
       <input className={login.password} type="password" placeholder='PASSWORD'/>
        <button onClick={redirectToRegistration} className={login.donthaveacc} >Dont Have an Account ! Click Here</button>
        <button className={login.loginbtn}>Login</button>
       


       </div>
    </div>
  )
}

export default Login