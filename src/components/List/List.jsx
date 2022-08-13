import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import checkLogo from '../../images/check.png'
import './List.css'

const List = () => {
  const [modalData, setModalData]   = useState({visible: false, title: ''})
  const [tasks, setTasks]           = useState([
    {
      id: 1,
      task: 'Eat',
      time: '10:00',
      complete: true
    },
    {
      id: 2,
      task: 'Run',
      time: '15:00',
      complete: false
    },
    {
      id: 3,
      task: 'Drink',
      time: '25:00',
      complete: false
    }
  ])

  const changeStatus = (currentTask) => {
    const newTasks = tasks.map(task => {
      if (task.id === currentTask.id){
        task.complete = !task.complete
      }
      return task
    })
    
    setTasks(newTasks)
  }

  return (
    <div className='list-container'>
      <Modal 
        visible={modalData.visible} 
        title={modalData.title} 
        onClose={()=>setModalData({...modalData, visible: !modalData.visible})}
      />

      
      <ul className='list'>
        {tasks.map(task =>
          <li className={`task ${task.complete ? 'complete' : null}`} key={task.id}>

            <span className='check-logo' onClick={()=> changeStatus(task)}>
              <img src={checkLogo} alt="Check Logo"/>
            </span>

            <span className={`task-description`}>
              {task.task}
            </span>

            <Button options squared onClick={()=>setModalData({visible: true, title:'Edit'})}/>
          </li>
        )}

        <li 
        className='task add-task'
        onClick={()=>setModalData({visible: true, title:'Add'})}>
          Add Task
        </li>
      </ul>
    </div>
  )
}

export default List