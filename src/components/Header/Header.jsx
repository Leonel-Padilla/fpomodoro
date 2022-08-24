import './Header.css'
import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import userIcon from '../../images/user.png'


const Header = () => {
  const navigate = useNavigate()

  const LogOut = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className='main-view-header-container'>
      <h2>POMODORO</h2>
      <Button 
        className='login-header-button'
        ghost
        squared
        onClick={sessionStorage.getItem('token') ? ()=>LogOut() : ()=>navigate('/login')}
      >
        <img src={userIcon} alt="User icon" />
        {sessionStorage.getItem('token') ? 'Logout' : 'Login'}
      </Button>
    </div>
  )
}

export default Header