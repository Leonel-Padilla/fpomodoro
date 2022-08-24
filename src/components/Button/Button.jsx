import React from 'react'
import optionsLogo from '../../images/menu (1).png'
import startLogo from '../../images/play.png'
import pauseLogo from '../../images/pause.png'
import restartLogo from '../../images/restart.png'
import settingsLogo from '../../images/settings.png'
import './Button.css'

const Button = ({ ghost, options, children, small, remove, edit, add, squared, start, pause, restart, controls, settings, ...props }) => {
  const getClassName = () => {
    let className = ''

    if (ghost) className      += ' ghost '
    if (options) className    += ' options '
    if (settings) className   += ' settings '
    if (small) className      += ' small '
    if (remove) className     += ' remove '
    if (edit) className       += ' edit '
    if (add) className        += ' add '
    if (squared) className    += ' squared '
    if (controls) className   += ' controls '
    
    return className
  }

  
  return (
    <button 
      {...props}
      className={`${getClassName()} ${props.className}`}>
        {
        options ? 
          <img src={optionsLogo} alt='Options logo'></img>
        : 
        settings ? 
          <img src={settingsLogo} alt='Settings logo'></img>
        :
        start ? 
          <img src={startLogo} alt='Start logo'></img>
        :
        pause ? 
          <img src={pauseLogo} alt='Pause logo'></img>
        :
        restart ?
          <img src={restartLogo} alt='Restart logo'></img>
        :
          children
        }
    </button>
  )
}

export default Button