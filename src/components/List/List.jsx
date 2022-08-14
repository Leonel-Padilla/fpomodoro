import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import checkLogo from '../../images/check.png'
import './List.css'

const List = () => {
  const [modalData, setModalData]   = useState({visible: false, title: ''})
  const [tasks, setTasks]           = useState([
    {
      id: 1,
      task: 'Eat',
      complete: false
    },
    {
      id: 2,
      task: 'Run',
      complete: false
    },
    {
      id: 3,
      task: 'Drink',
      complete: false
    },
    {
      id: 4,
      task: 'Call',
      complete: false
    }
  ])
  const [currentTask, setCurrentTask] = useState({
    id: 0,
    task: '',
    complete: false
  })
  
  const handleOptionsClick = (id) => {
    setModalData({visible: true, title:'Edit'})
    setCurrentTask(tasks.find(task => task.id === id))
  }

  const deleteTask = (e) => {
    e.preventDefault()
    setTasks(current => current.filter(task => task.id !== currentTask.id))
    cancel()
  }

  const addTask = (e) => {
    e.preventDefault()
    setTasks(current => [...current, {...currentTask, id: (tasks.length + 2) }])
    cancel()
  }
  
  const editTask = (e) => {
    e.preventDefault()

    setTasks(current => 
      current.map(task => {
        if (task.id === currentTask.id){
          return currentTask
        }

        return task
      })
    )

    cancel()
  }

  const cancel = (e) => {
    if(e) e.preventDefault()
    
    setModalData(current => ({...current, visible: false}))
    setCurrentTask(current => ({...current, task:''}))
  }

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
        onClose={cancel}
      >
        <form 
        className='task-form'
        onSubmit={modalData.title === 'Edit' ? editTask : addTask}
        >
          <Input 
            className='task-input'
            noValidation
            name='task_description'
            required
            value={currentTask.task}
            onChange={(e)=>setCurrentTask(current => ({...current, task: e.target.value}))}
          />
          
          <div className='task-form-footer'>
            <div className='form-buttons-container'>
              <Button type='submit' /*onClick={modalData.title === 'Edit' ? editTask : addTask}*/ squared add small>
                Save
              </Button>

              <Button onClick={cancel} squared small edit>
                Cancel
              </Button>
            </div>

            <Button onClick={deleteTask} 
              style={{visibility: modalData.title === 'Edit' ? 'visible' : 'hidden'}}
              squared remove
              small>
              Delete
            </Button>
          </div>
        </form>
        
      </Modal>

      
      <ul className='list'>
        {tasks.map(task =>
          <li className={`task ${task.complete ? 'complete' : ''}`} key={task.id}>

            <span className='check-logo' onClick={()=> changeStatus(task)}>
              <img src={checkLogo} alt="Check Logo"/>
            </span>

            <span className={`task-description`}>
             {task.task}
            </span>

            <Button options squared onClick={()=>handleOptionsClick(task.id)}/>
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