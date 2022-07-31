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

  const validate = ({target}) => {
    switch (target.type){
      case 'password': {
        if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(target.value)){
          setValidation({status: true, value:'Password must contain Uppercase, lowercase and a number and at least 8 characters.'})
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
        if(!(/^([A-za-z]\s?){1,}$/).test(target.value)){
          setValidation({status: true, value:'This field is required and must contain only text and a space between words.'})
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
      {...props} 
    />
      <span className='error'>{validation.status ? validation.value : null}</span>
    </div>
  )
}

export default Input