import React from 'react'
import Timer from '../Timer/Timer'
import List from '../List/List'
import Header from '../Header/Header'
import './MainView.css'

const MainView = () => {

  return (
    <div className='main-view-container'>

      <div className='pomodoro-container'>
        <Header/>

        <div className='body'>
          <div className='timer'>
            <Timer/>
          </div>
        
          <List className='list-container'/>  
        </div>
      </div>
    </div>
  )
}

export default MainView