import { createContext, useState } from "react";

export const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
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
  const [selectedTask, setSelectedTask] = useState({
    id: 0,
    task: '',
    complete: false
  })

  const addTask = (newTask) => {
    setTasks(current => [...current, {...newTask, id: (tasks.length + 2) }])
  }

  const editTask = (newTask) => {
    setTasks(current => 
      current.map(task => {
        if (task.id === newTask.id){
          return newTask
        }

        return task
      })
    )
  }

  const deleteTask = (id) => {
    setTasks(current => current.filter(task => task.id !== id))
  }

  const changeStatus = (id) => {
    setTasks(current => 
      current.map(task => {
        if (task.id === id){
          return {...task, complete: !task.complete}
        }

        return task
      })
    )
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      editTask,
      addTask,
      deleteTask,
      changeStatus,
      selectedTask,
      setSelectedTask
    }}>
      {children}
    </TasksContext.Provider>
  )
}
