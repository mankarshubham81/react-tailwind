import React from 'react'


// Note: reffer D:\shubham_code\react-tailwind\src\index.css because i have added layer of 
//@layer base {
    // h1 {
    //     @apply text-3xl italic;
    //   }
const Directive = () => {
  return (
    <div>
        <h1>This is heading</h1>
        <p>this is nice short paragarph</p>

        <ul>
            <li>unorderded item 1</li>
            <li>unorderded item 2</li>
            <li>unorderded item 3</li>
        </ul>
        <ol>
            <li>orderded item 1</li>
            <li>orderded item 2</li>
            <li>orderded item 3</li>
        </ol>
        <button className='btn-blue'>custom layer component blue button</button>
    </div>
  )
}

export default Directive