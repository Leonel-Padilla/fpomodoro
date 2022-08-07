import React, { useState } from 'react'
import Button from '../Button/Button'
import './Timer.css'

const Timer = ({ workTime, breakTime }) => {
  const [time, setTime] = useState({currentMinute: workTime, currentSecond: 0, title: 'Work Time'})
  const [id, setId] = useState(0)

  const start = () => {
    if (id === 0) {
      setId(
        setInterval(()=>{

          setTime(state => {
            if (state.currentMinute === 0 && state.currentSecond === 0) {
              if(state.title === 'Work Time') {
                return {currentMinute: breakTime, currentSecond: 0, title: 'Break Time'}
              }else {
                return {currentMinute: workTime, currentSecond: 0, title: 'Work Time'}
              }

            } else {
              const newTime = {...state,
                currentSecond: 
                state.currentSecond === 0 ? 59 :
                state.currentSecond - 1,
                
                currentMinute:
                state.currentSecond === 0 ? state.currentMinute - 1 :
                state.currentMinute
              }
  
              return newTime
            }

          })      
        }, 10)
      ) 
    }
  }

  const stop = () => {
    clearInterval(id)
    setId(0)
  }

  const restart = () => {
    setTime({currentMinute: workTime, currentSecond: 0, title: 'Work Time'})
  }

  return (
    <div className='timer-container'>
      <h2 className='title'>{time.title}</h2>
      <h1 className='time'>{time.currentMinute}:{`${time.currentSecond < 10 ? '0' : ''}${time.currentSecond}`}</h1>
      
      <div className='controls-container'>
        <Button onClick={stop} pause controls squared>Stop</Button>
        <Button onClick={start} start controls squared>Start</Button>
        <Button onClick={restart} restart controls squared>Stop</Button>
      </div>
    </div>
  )
}

export default Timer