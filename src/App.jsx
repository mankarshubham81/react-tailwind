import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlexBox from './components/FlexBox';
import Grid from './components/Grid';
import Shadows from './components/Shadows';
import Radius from './components/border-radius';
import Hover from './components/Hover';
import Animations from './components/Animations';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-8 bg-slate-800 text-white'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-4xl font-thin underline decoration-double' >Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

// 1)
// export default FlexBox
// 2)
// export default Grid
// 3)
// export default Shadows
// 4)
// export default Radius
// 5)Hover
// export default Hover
// 6) Animations
export default Animations



