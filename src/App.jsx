import Header from './components/Header'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import Footer from './components/Footer'
import {useState} from "react"

function App() {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const text = inputValue.trim()
    if (!text) return // ignore empty input

    const newTask = { 
      id: Date.now(), 
      text, 
      completed: false 
    }
    setTasks(prev => [...prev, newTask])
    setInputValue('')
  }

  // Toggle completion by id
  function toggleTask(id) {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Header/>
        <AddTask
        onAddTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}/>
        <TasksList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
