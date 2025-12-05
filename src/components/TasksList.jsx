
import React from "react"
import { CheckCircle2, Circle, Trash2} from 'lucide-react'

export default function TasksList({tasks}){
    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h2>
                <div className="space-y-3">
                {tasks.map((task, index) => (
                    <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all bg-orange-50 hover:bg-orange-100`}
                    >
                    <button
                        className="flex-shrink-0 transition-transform hover:scale-110"
                    >
                        <Circle className="text-gray-400" size={28}/>
                    </button>
                    <span
                        className={`flex-1 text-lg text-gray-800`}
                    >
                        {task}
                    </span>
                    <button
                        className="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-xl"
                    >
                        <Trash2 size={18} />
                    </button>
                    </div>
                ))}
                </div>
        </div>
    )
}
