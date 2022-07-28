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

    console.log(signInData)
    /*const response = await axios.post(`${URL}/login`, signInData)
    sessionStorage.setItem('token', response.data.acess_token)*/
  }

  const handleChangeSignIn = ({ target }) => {
    setSignInData({
      ...signInData,
      [target.name]: target.value
    })
  }

  const signUp = async (e) => {
    e.preventDefault()

    console.log(signUpDdata)
    /*const response = await axios.post(`${URL}/registro`, signUpDdata)
    console.log(response.data)*/
  }

  const handleChangeSignUp = ({ target }) => {
    setSignUpData({
      ...signUpDdata,
      [target.name]: target.value
    })
  }

  return (
    <div className="main-container">

      <div className="container" ref={containerRef}>

        <div className="sign-in form-container">
          <h2>Sign In</h2>
          <span>Use you account</span>
          <form>
            <Input 
              name='email'
              value={signInData.email}
              onChange={handleChangeSignIn}
            />
            <Input 
              name='password'
              value={signInData.password}
              onChange={handleChangeSignIn}
            />
  
            <Button onClick={signIn}>Sing In</Button>
          </form>

        </div>
  
        <div className="sign-up form-container">
          <h2>Create Account</h2>
          <span>Use your email for registration</span>
          <form>
            <Input 
              name='name'
              value={signUpDdata.name}
              onChange={handleChangeSignUp}
            />
            <Input 
              name='email'
              value={signUpDdata.email}
              onChange={handleChangeSignUp}
            />
            <Input
             name='password'
             value={signUpDdata.password}
             onChange={handleChangeSignUp}
            />
            <Input 
              name='password_confirmation'
              value={signUpDdata.password_confirmation}
              onChange={handleChangeSignUp}
            />
  
            <Button onClick={signUp}>Sign Up</Button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>

              <Button ghost onClick={()=> changeClass('remove')}>Sign In</Button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Button ghost onClick={()=> changeClass('add')}>Sign Up</Button>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Login