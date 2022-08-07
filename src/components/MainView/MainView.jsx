import React, { useState } from 'react'
import Timer from '../Timer/Timer'
import './MainView.css'

const MainView = () => {
  const [workTime]  = useState(20)
  const [breakTime] = useState(5)
  
  return (
    <div className='main-view-container'>
      <div className='pomodoro-container'>
        <div className='header'>
          <h2>HEADER</h2>
        </div>

        <div className='body'>
          <div className='timer'>
            <Timer
              workTime={workTime} 
              breakTime={breakTime}
            />
          </div>
          

          <div className='tasks-list'>
            Lista
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainView