import React from 'react'

const Hover = () => {
  return (
    <div className='flex gap-6 flex-wrap m-6'>
        <div className='h-32 w-52 shadow-sm rounded-lg shrink-0 text-center  bg-red-700' >child 1</div>
        <div className='h-32 w-52 shadow-lg rounded-lg transition-all duration-[2000ms] ease-out hover:border-blue-800 hover:border-8 shrink-0 text-center bg-blue-500' >child 2</div>
        <div className='h-32 w-52 shadow-2xl rounded-lg shrink-0 text-center bg-green-700' >child 3</div>
        <div className='h-32 w-52 shadow rounded-lg shrink-0 transition-all duration-1000 ease-out hover:bg-orange-300 text-center  bg-red-700' >child 4</div>
        <div className='h-32 w-52 shadow-md rounded-lg shrink-0 text-center bg-blue-700' >child 5</div>
        <div className='h-32 w-52 shadow-inner rounded-lg shrink-0 text-center duration-1000 hover:translate-x-8 hover:bg-orange-300 bg-green-700' >child 6</div>
        {/* <div className='h-32 w-52 rounded-lg shrink-0 text-center  bg-red-700' >child 7</div> */}
        
    </div>
  )
}

export default Hover