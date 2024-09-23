import React from 'react'

const Radius = () => {
  return (
    <div className='flex gap-2 flex-wrap m-2'>
        <div className='h-32 w-32 rounded-e-3xl border-gray-600 border-4 shrink-0 text-center  bg-red-500' >child 1</div>
        <div className='h-32 w-32 rounded-md shrink-0 text-center bg-blue-500' >child 2</div>
        <div className='h-32 w-32 rounded-lg shrink-0 text-center bg-green-500' >child 3</div>
        <div className='h-32 w-32 rounded-xl shrink-0 text-center  bg-purple-500' >child 4</div>
        <div className='h-32 w-32 rounded-2xl shrink-0 text-center bg-blue-500' >child 5</div>
        <div className='h-32 w-32 rounded-3xl shrink-0 text-center border-gray-600 border-x-4 bg-gray-500' >child 6</div>
        <div className='h-32 w-32 rounded-full shrink-0 text-center  bg-red-500' >child 7</div>
        <div className='h-32 w-32 rounded-tr-full shrink-0 text-center border-green-600 border-t-4 bg-red-500' >child 8</div>
        <div className='h-32 w-32 rounded-tr-xl shrink-0 text-center  bg-orange-500' >child 9</div>
        <div className='h-32 w-32 rounded-tr-full rounded-bl-full shrink-0 text-center border-red-600 border-b-8  bg-violet-500' >child 10</div>
    </div>
  )
}

export default Radius