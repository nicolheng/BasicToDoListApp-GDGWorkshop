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
      const newTask = text
      setTasks(prev => [...prev, newTask])
      setInputValue('')
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
        tasks={tasks}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
