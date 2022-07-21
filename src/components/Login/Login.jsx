import { useRef, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Login.css'
import URL from '../../URL/URL'
import axios from 'axios'

const Login = () => {
  const [signUpDdata, setSignUpData]  = useState({name: '', email: '', password: '', password_confirmation: ''})
  const [signInData, setSignInData]   = useState({email: '', password: ''})

  const containerRef = useRef()

  const changeClass = (acction) => {
    if(acction === 'add'){
      containerRef.current.classList.add('active')
    }else{
      containerRef.current.classList.remove('active')
    }
  }

  const signIn = async (e) => {
    e.preventDefault()

    const response = await axios.post(`${URL}/login`, signInData)
    sessionStorage.setItem('token', response.data.acess_token)
  }

  const signUp = async (e) => {
    e.preventDefault()

    console.log(signUpDdata)
    const response = await axios.post(`${URL}/registro`, signUpDdata)

    console.log(response.data)
  }

  return (
    <div className="main-container">

      <div className="container" ref={containerRef}>

        <div className="sign-in form-container">
          <h2>Sign In</h2>
          <span>Use you account</span>
          <form>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
  
            <button id="boton">Sing In</button>
          </form>

        </div>
  
        <div className="sign-up form-container">
          <h2>Create Account</h2>
          <span>Use your email for registration</span>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Password Confirmation"/>
  
            <button>Sing Up</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={()=> changeClass('remove')}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={()=> changeClass('add')}>Sign Up</button>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Login