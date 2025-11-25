import React from "react"
import { CheckCircle2, Circle, Trash2} from 'lucide-react'

export default function TasksList({tasks, toggleTask, deleteTask}){
    return (
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
    )
}