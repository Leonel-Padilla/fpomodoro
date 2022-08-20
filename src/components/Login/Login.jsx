import { useRef } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Login.css'
import URL from '../../URL/URL'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const signInData = useForm({email: '', password: ''})
  const signUpData = useForm({name: '', email: '', password: '', password_confirmation: ''})
  const [modalData, setModalData]  = useState({visible: false, title: '', message: ''})
  const containerRef = useRef()
  const navigate = useNavigate()

  const changeClass = (action) => {
    if(action === 'add'){
      containerRef.current.classList.add('active')
    }else{
      containerRef.current.classList.remove('active')
    }
  }

  // Gets called when the user press the "sign in" button.
  const signIn = async (e) => {
    e.preventDefault()

    try{
      const response = await axios.post(`${URL}/login`, signInData.values)

      if (response.data.mensaje.includes('Incorrecto')){
        throw new Error('Incorrect credentials')
      }

      sessionStorage.setItem('token', response.data.acess_token)
      navigate('/')
    }catch(error){
      setModalData({visible: true, title: 'Error', message: error.message})
    }
  }

  // Gets called when the user press the "sign up" button.
  const signUp = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post(`${URL}/registro`, signUpData.values)
      signUpData.setValues({name: '', email: '', password: '', password_confirmation: ''})
      setModalData({visible: true, title: 'Éxito', message: response.data.mensaje})
      changeClass('remove')
      
    }catch(error){
      setModalData({visible: true, title: 'Error', message: error.message})
    }
  }

  return (
    <div className="main-container">
      <Modal 
        visible={modalData.visible} 
        onClose={()=> setModalData(current=> ({...current, visible: false}))}
        title={modalData.title} 
        message={modalData.message}
      />

      <div className="container" ref={containerRef}>

        <div className="sign-in form-container">
          <h2>Sign In</h2>
          <span className='login-span'>Use you account</span>
          <form
            onSubmit={signIn}
          >
            <Input 
              name='email'
              value={signInData.values.email}
              onChange={signInData.handleChange}
            />
            <Input 
              name='password'
              value={signInData.values.password}
              onChange={signInData.handleChange}
            />
  
            <Button>Sing In</Button>
          </form>

        </div>
  
        <div className="sign-up form-container">
          <h2>Create Account</h2>
          <span className='login-span'>Use your email for registration</span>
          <form
            onSubmit={signUp}
          >
            <Input 
              name='name'
              value={signUpData.values.name}
              onChange={signUpData.handleChange}
              pattern='^([A-za-z]\s?){1,}$'
            />
            <Input 
              name='email'
              value={signUpData.values.email}
              onChange={signUpData.handleChange}
              pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
            />
            <Input
             name='password'
             value={signUpData.values.password}
             onChange={signUpData.handleChange}
             pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
            />
            <Input 
              name='password_confirmation'
              value={signUpData.values.password_confirmation}
              onChange={signUpData.handleChange}
              compare={signUpData.values.password}
              pattern={`${signUpData.values.password}`}
            />
  
            <Button>Sign Up</Button>
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