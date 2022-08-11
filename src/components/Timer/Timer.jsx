import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import './Timer.css'

const Timer = () => {
  const [workTime, setWorkTime]   = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [time, setTime] = useState({currentMinute: workTime, currentSecond: 0, title: 'Work Time'})
  const [id, setId]     = useState(0)  //This const saves the Interval Id in order for it to get removed later.
  const [modalData, setModalData] = useState({visible: false, title: ''})

  //Gets called when the user clicks the start button and set the interval which decrease the seconds, minutes,
  //and switches between work time and break time
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
        }, 1)
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

  //Gets called when the use clicks the settings button
  const settings = () => {
    setModalData({visible: true, title: 'Edit TImes'})
  }

  //Gets called when the user edit either work time or break time, 
  //it's and uncontrolled form in order to set the values when the user clicks the submit button.
  const handleSubmit = (e) => {
    e.preventDefault()
    const arrayData = Array.from(new FormData(e.target))
    const data = Object.fromEntries(arrayData)

    setWorkTime(data.work_time)
    setBreakTime(data.break_time)
    setTime({...time, currentMinute: data.work_time})
    setModalData({...modalData, visible:false})
  }

  return (
    <div className='timer-container'>
      <Modal 
      visible={modalData.visible} 
      title={modalData.title}
      message={modalData.message}
      onClose={()=>setModalData({...modalData, visible: false})}
      >
        <form 
        className='edit-timer-form'
        onSubmit={handleSubmit}
        > 
          <label className='form-label'>Work Time</label>
          <Input 
          noValidation
          name={'work_time'}
          min={25}
          max={100}
          />
          <label className='form-label'>Break Time</label>
          <Input 
          noValidation
          name={'break_time'}
          max={workTime}
          min={5}
          />

          <Button add squared>Accept</Button>
        </form>
      </Modal>
      
      <h2 className='title'>{time.title}</h2>
      <h1 className='time'>{time.currentMinute}:{`${time.currentSecond < 10 ? '0' : ''}${time.currentSecond}`}</h1>

      <div className='controls-container'>
        <Button onClick={stop} pause controls squared>Stop</Button>
        <Button onClick={start} start controls squared>Start</Button>
        <Button onClick={restart} restart controls squared>Stop</Button>
        <Button onClick={settings} settings controls squared></Button>
      </div>
    </div>
  )
}

export default Timer