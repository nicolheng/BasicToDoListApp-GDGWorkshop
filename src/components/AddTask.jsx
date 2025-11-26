import React from "react"
import { Plus } from 'lucide-react'

export default function AddTask({onAddTask, inputValue, setInputValue}){
    return (
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Add New Task</h2>
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                type="text"
                aria-label="New task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onAddTask()}
                placeholder="What do you need to do?"
                className="flex-1 px-6 py-4 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
                />
                <button
                onClick={onAddTask}
                aria-label="Add task"
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all flex items-center gap-2 shadow-md"
                >
                <Plus size={20} />
                Add
                </button>
            </div>
        </div>
    )
}