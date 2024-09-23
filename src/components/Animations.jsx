import React from 'react'

const Animations = () => {
  return (
    <div className='grid grid-cols-3 gap-2 m-2'>
        <div className='h-32 rounded-lg text-center  bg-red-700' >child 1</div>
        <div className='h-32 rounded-lg text-center bg-blue-700' >child 2</div>
        <div className='h-32 rounded-lg text-center bg-green-700' >child 3</div>
        <div className='h-32 rounded-lg text-center animate-bounce bg-red-700' >child 4</div>
        <div className='h-32 rounded-lg text-center animate-ping bg-blue-700' >child 5</div>
        <div className='h-32 rounded-lg animate-wiggle text-center bg-green-700' >child 6</div>
        <div className='h-32 rounded-lg text-center  bg-red-700' >child 7</div>
        <div className='h-32 rounded-lg text-center animate-pulse bg-blue-700' >child 8</div>
        <div className='h-32 rounded-lg text-center bg-green-700' >child 9</div>
        <div className='h-32 rounded-lg text-center  bg-red-700' >child 10</div>
        <div className='h-32 rounded-lg text-center bg-blue-700' >child 11</div>
        <div className='h-32 rounded-lg text-center hover:animate-spin bg-green-700' >child 12</div>
        
    </div>
  )
}

export default Animations