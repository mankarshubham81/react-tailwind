import React from 'react'

const Jit = () => {
    return (
    <div>
        <div className="grid grid-cols-3 gap-1">
            <div className="h-32 col-span-2 bg-red-400" />
            <div className="[background:#eeeeee] h-[50px] col-span-3" />
            <div className="h-32 bg-amber-400" />
            <div className="h-32 bg-slate-400" />
            <div className="h-32 bg-yellow-400" />
        </div>
    </div>)
}

export default Jit