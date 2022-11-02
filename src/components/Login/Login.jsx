import { useRef } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Login.css'
import { useState } from 'react'
import Modal from '../Modal/Modal'

const Login = () => {
  const [modalData, setModalData] = useState({visible: false, title: '', message: ''})
  const containerRef = useRef()

  const changeClass = (action) => {
    if(action === 'add'){
      containerRef.current.classList.add('active')
    }else{
      containerRef.current.classList.remove('active')
    }
  }

  // Gets called when the user press whether the "sign in" or "sign up" button.
  const showModal = (e) => {
    e.preventDefault()
    setModalData({visible: true, title: 'Error', message: 'This feature is not finished yet.'})
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
            onSubmit={showModal}
          >
            <Input 
              name='email'
            />
            <Input 
              name='password'
            />
  
            <Button>Sing In</Button>
          </form>

        </div>
  
        <div className="sign-up form-container">
          <h2>Create Account</h2>
          <span className='login-span'>Use your email for registration</span>
          <form
            onSubmit={showModal}
          >
            <Input 
              name='name'
              pattern='^([A-za-z]\s?){1,}$'
            />
            <Input 
              name='email'
              pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
            />
            <Input
             name='password'
             pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
            />
            <Input 
              name='password_confirmation'
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