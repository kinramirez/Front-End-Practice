import {useState} from 'react'

function Counter(){
  const [count, setCount] = useState(0)

  function increment(){
    console.log('count: ', count)
    setCount(count + 1)
  }

  function decrement(){
    console.log('count: ', count)
    setCount(count - 1)
  }

  function reset(){
    console.log('count: ', count)
    setCount(0)
  }

  return(
    <div>
      <p>{count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}


export default Counter
// Day 1: Counter Component
// File: day1-counter.jsx

//  Import useState *
//  Create component with count state
//  Write increment function
//  Write decrement function
//  Return JSX with display and 2 buttons
//  Test in browser
//  Commit to GitHub