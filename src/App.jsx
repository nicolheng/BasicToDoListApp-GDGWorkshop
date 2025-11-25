import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import Footer from './components/Footer'

/*
  Simple Todo App (Refined for readability and teaching)

  Contract (inputs/outputs):
  - Inputs: user types text and clicks Add or presses Enter.
  - Outputs: updates the visible list of tasks and summary stats.

  Data shape (task): { id: number, text: string, completed: boolean }

  Notes for students:
  - We keep state local with useState.
  - Each handler is a small pure function that updates state.
  - We show simple derived state (counts and percentage).

  Edge cases handled:
  - Empty or whitespace-only input is ignored.
  - IDs use Date.now() for simplicity (not for production).
*/

export default function App() {
  // Local UI state
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage or set default task
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Learn React basics', completed: false }
    ];
  });

  const [inputValue, setInputValue] = useState('');

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task (guarded against empty input)
  function addTask() {
    const text = inputValue.trim()
    if (!text) return // ignore empty input

    const newTask = { id: Date.now(), text, completed: false }
    setTasks(prev => [...prev, newTask])
    setInputValue('')
  }

  // Toggle completion by id
  function toggleTask(id) {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Delete task by id
  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  // Derived stats
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.completed).length
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header/>

        {/* Stats Cards */}
        <StatsCards 
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          completionRate={completionRate}/>

        {/* Add Task Section */}
        <AddTask
          addTask={addTask}
          inputValue={inputValue}
          setInputValue={setInputValue}/>

        {/* Tasks List */}
        <TasksList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}/>

        {/* Footer Tip */}
        <Footer/>

      </div>
    </div>
  );
}
