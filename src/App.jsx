import Header from './components/Header'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import Footer from './components/Footer'
function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Header/>
        <AddTask/>
        <TasksList/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
