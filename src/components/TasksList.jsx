
import React from "react"
import { CheckCircle2, Circle, Trash2} from 'lucide-react'

export default function TasksList(){
    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h2>
                <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No tasks yet. Add your first task above!</p>
                </div>
        </div>
    )
}
