import React from 'react'
export default function MetricCard({title, value}){
  return (
    <div className="p-4 bg-gray-800 rounded">
      <h3 className="text-sm opacity-80">{title}</h3>
      <div className="text-2xl font-mono mt-2">{value ?? '—'}</div>
    </div>
  )
}
