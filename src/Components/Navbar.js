import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  function redirectToLogin(){
    navigate('/login')
  }
  function redirectToRegistration(){
    navigate('/registration')
  }
  function redirectToAboutMe(){
    navigate('/aboutme')
  }
  return (
    <div>
      <nav className='completeNavbar'>
      <h1 className='name'>Suman</h1>
        <ul className='navbar' >
          <li style={{cursor:'pointer'}} onClick={redirectToAboutMe}>About-Me</li>
          <li style={{cursor:'pointer'}} onClick={redirectToRegistration}>Registration</li>
          <li style={{cursor:'pointer'}} onClick={redirectToLogin}>Login</li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_Z8NkJTKQmhsyBuGnRsAgd7TiOPuaf7Raw&usqp=CAU" alt="icon" className='icon'/>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar