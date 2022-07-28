import React from 'react'
import './Input.css'

const Input = ({name, ...props}) => {

  const getType = () => {
    return(
      name.includes('password') ? 'password' :
      name.includes('email')    ? 'email'    :
      'text'
    )
  }

  const getByPlaceholder = () => {
    let placeholder = ''
    name.split('_').map(subString => placeholder += `${subString.charAt(0).toUpperCase()}${subString.slice(1)} `)

    return placeholder
  }

  return (
    <input 
      name={name}
      type={getType()}
      placeholder={getByPlaceholder()}
      {...props} 
    />
  )
}

export default Input