import { useContext } from "react"
import { TasksContext } from '../context/TasksContext'

const useList = () => {
  const {tasks, setTasks} = useContext(TasksContext)

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

  return {
    tasks,
    editTask,
    addTask,
    deleteTask,
    changeStatus
  }
}

export default useList