import React,{useState} from 'react'
import viteLogo  from '/vite.svg';
import reactLogo from '../../src/assets/react.svg'

const ReactViteScreen = () => {

    const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#242424] text-[rgba(255,255,255,0.87)] flex justify-center items-center'>
        <div className='p-8 max-w-[418px] w-full mx-auto text-center'>
            <div className='flex gap-8 justify-center items-center'>
                <a href="https://vitejs.dev" className='shrink-0' target="_blank">
                <img src={viteLogo} className="h-24 hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]" alt="Vite logo" />
                </a>
                <a href="https://react.dev" className='shrink-0' target="_blank">
                <img src={reactLogo} className="h-24 animate-spin [animation-duration:20s] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]" alt="React logo" />
                </a>
            </div>
            <h1 className='text-5xl font-bold my-8'>Vite + React</h1>
            <div className="card">
                <button 
                 className="px-4 py-2 my-6 
                 border border-transparent
                 text-gray-300 
                 bg-black
                 transition-all
                 rounded-md
                  hover:border-[#646cff] hover:text-white 
                 transition-colors duration-200 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button> 
                <p className='my-4 cursor-pointer font-light'>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="text-[#888]">
                Click on the Vite and React logos to learn more
            </p>
            </div>
        </div>
  )
}

export default ReactViteScreen