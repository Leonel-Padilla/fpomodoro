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

  return (
    <TasksContext.Provider value={{
      tasks,
      setTasks
    }}>
      {children}
    </TasksContext.Provider>
  )
}
