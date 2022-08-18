import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import checkLogo from '../../images/check.png'
import { TasksContext } from '../../context/TasksContext'
import './List.css'

const List = () => {
  const [modalData, setModalData]   = useState({visible: false, title: ''})
  const { 
    tasks,
    addTask,
    editTask,
    deleteTask,
    changeStatus,
    setSelectedTask
  } = useContext(TasksContext)

  const [newTask, setNewTask] = useState({
    id: 0,
    task: '',
    complete: false
  })
  
  const handleOptionsClick = (id) => {
    setModalData({visible: true, title:'Edit'})
    setNewTask(tasks.find(task => task.id === id))
  }

  const closeModal = (e) => {
    if(e) e.preventDefault()
    setModalData(current => ({...current, visible: false}))
    setNewTask(current => ({...current, task: ''}))
  }

  const executeTaskFeature = (e, action, data) => {
    e.preventDefault()
    action(data)
    closeModal()
  }

  return (
    <div className='list-container'>
      <Modal 
        visible={modalData.visible} 
        title={modalData.title} 
        onClose={closeModal}
      >
        <form 
        className='task-form'
        onSubmit={modalData.title === 'Edit' ? 
            (e)=> executeTaskFeature(e, editTask, newTask) 
          :
            (e)=> executeTaskFeature(e, addTask, newTask)
        }
        >
          <Input 
            className='task-input'
            noValidation
            name='task_description'
            required
            value={newTask.task}
            onChange={(e)=>setNewTask(current => ({...current, task: e.target.value}))}
          />
          
          <div className='task-form-footer'>
            <div className='form-buttons-container'>
              <Button type='submit' squared add small>
                Save
              </Button>

              <Button onClick={closeModal} squared small edit>
                Cancel
              </Button>
            </div>

            <Button 
              onClick={(e)=>executeTaskFeature(e, deleteTask, newTask.id)} 
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

            <span className='check-logo' onClick={()=> changeStatus(task.id)}>
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