import React, { useState } from 'react'
import './Input.css'

const Input = ({name, ...props}) => {
  const [validation, setValidation] = useState({status: false, value: ''})

  const getType = () => {
    return(
      name.includes('password') ? 'password' :
      name.includes('email')    ? 'email'    :
      'text'
    )
  }

  const getPlaceholder = () => {
    let placeholder = ''
    name.split('_').map(subString => placeholder += `${subString.charAt(0).toUpperCase()}${subString.slice(1)} `)

    return placeholder
  }

  const getTitle = ({ target }) => {
    console.log(target.type)
    return(
      target.type.includes('password') ? 'Password must containt an uppercase, lowercase and a number' :
      target.type.includes('email')    ? 'Enter an email valid format: "example@example.com" '    :
      'This field is required'
    )
  }

  const validate = ({target}) => {
    switch (target.type){
      case 'password': {
        if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(target.value)){
          setValidation({status: true, value:'Password must contain Uppercase, lowercase and a number.'})
        }else{
          setValidation({...validation, status: false})
        }
        break
      }

      case 'email': {
        if(!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(target.value)){
          setValidation({status: true, value:'Enter a valid email.'})
        }else{
          setValidation({...validation, status: false})
        }
        break
      }

      default : {
        if(target.value === ''){
          setValidation({status: true, value:'This field is required.'})
        }else{
          setValidation({...validation, status: false})
        }
      }
    }
    

  }

  return (
    <div className='input-container'>
      <input 
      name={name}
      type={getType()}
      required
      placeholder={getPlaceholder()}
      onBlur={validate}
      title={getTitle}
      {...props} 
    />
      <span className='error'>{validation.status ? validation.value : null}</span>
    </div>
  )
}

export default Input