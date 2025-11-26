import React from "react"
import { CheckCircle2, Circle} from 'lucide-react'

export default function StatsCards({totalTasks, completedTasks, completionRate}){
    
    return (
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
    )
}