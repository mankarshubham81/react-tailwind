import React from 'react'

const Shadows = () => {
  return (
    <div className='flex gap-6 flex-wrap m-8'>
        <div className='h-32 w-52 shadow-sm rounded-lg shrink-0 text-center  bg-red-700' >child 1</div>
        <div className='h-32 w-52 shadow-lg rounded-lg shrink-0 text-center bg-blue-700' >child 2</div>
        <div className='h-32 w-52 shadow-2xl rounded-lg shrink-0 text-center bg-green-700' >child 3</div>
        <div className='h-32 w-52 shadow rounded-lg shrink-0 text-center  bg-red-700' >child 4</div>
        <div className='h-32 w-52 shadow-md rounded-lg shrink-0 text-center bg-blue-700' >child 5</div>
        <div className='h-32 w-52 shadow-inner rounded-lg shrink-0 text-center bg-green-700' >child 6</div>
        {/* <div className='h-32 w-52 rounded-lg shrink-0 text-center  bg-red-700' >child 7</div> */}
        
    </div>
  )
}

export default Shadows