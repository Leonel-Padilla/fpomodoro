import React from 'react'
import Timer from '../Timer/Timer'
import './MainView.css'

const MainView = () => {

  return (
    <div className='main-view-container'>

      <div className='pomodoro-container'>
        <div className='header'>
          <h2>HEADER</h2>
        </div>

        <div className='body'>
          <div className='timer'>
            <Timer/>
          </div>
          
          <div className='tasks-list'>
            List
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainView