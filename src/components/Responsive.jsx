import React from 'react'

const Responsive = () => {
  return (
    <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 m-4 md:m-14">
            <div className="shrink-0 h-32 rounded-md bg-red-400" />
            <div className="shrink-0 h-32 rounded-md bg-green-400" />
            <div className="shrink-0 h-32 rounded-md bg-amber-400" />
            <div className="shrink-0 h-32 rounded-md bg-slate-400" />
            <div className="shrink-0 h-32 rounded-md bg-cyan-400" />
            <div className="shrink-0 h-32 rounded-md bg-indigo-400" />
        </div>
    </div>
  )
}

export default Responsive