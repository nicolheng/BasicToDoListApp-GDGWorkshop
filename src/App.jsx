import React, { useState, useCallback, useEffect } from 'react'
import { CheckCircle2, Circle, Trash2, Plus } from 'lucide-react'

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
  const addTask = useCallback(() => {
    const text = inputValue.trim()
    if (!text) return // ignore empty input

    const newTask = { id: Date.now(), text, completed: false }
    setTasks(prev => [...prev, newTask])
    setInputValue('')
  }, [inputValue])

  // Toggle completion by id
  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }, [])

  // Delete task by id
  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }, [])

  // Derived stats
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.completed).length
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Tasks */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full" aria-hidden />
              <Circle className="text-gray-400" size={20} />
            </div>
            <div className="text-5xl font-bold text-gray-800 mb-2">{totalTasks}</div>
            <div className="text-sm text-gray-600">Open Tasks</div>
          </div>

          {/* Completed Tasks */}
          <div className="bg-gray-800 rounded-3xl p-6 shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full" aria-hidden />
              <CheckCircle2 className="text-orange-500" size={20} />
            </div>
            <div className="text-5xl font-bold mb-2">{completedTasks}</div>
            <div className="text-sm text-gray-400">Completed Tasks</div>
          </div>

          {/* Completion Rate */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full" aria-hidden />
              <div className="text-xs text-gray-600">Rate</div>
            </div>
            <div className="text-5xl font-bold text-gray-800 mb-2">{completionRate}%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
        </div>

        {/* Add Task Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Add New Task</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              aria-label="New task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="What do you need to do?"
              className="flex-1 px-6 py-4 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
            />
            <button
              onClick={addTask}
              aria-label="Add task"
              className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all flex items-center gap-2 shadow-md"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h2>

          {tasks.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">No tasks yet. Add your first task above!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    task.completed
                      ? 'bg-gray-50 opacity-60'
                      : 'bg-orange-50 hover:bg-orange-100'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="flex-shrink-0 transition-transform hover:scale-110"
                    aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="text-orange-500" size={28} />
                    ) : (
                      <Circle className="text-gray-400" size={28} />
                    )}
                  </button>

                  <span
                    className={`flex-1 text-lg ${
                      task.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-800'
                    }`}
                  >
                    {task.text}
                  </span>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-xl"
                    aria-label={`Delete ${task.text}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Tip */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            💡 <span className="font-semibold">Pro tip:</span> Press Enter to quickly add tasks
          </p>
        </div>
      </div>
    </div>
  );
}
