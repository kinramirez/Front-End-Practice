import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleAddCount() {
    setCount(count + 1)
  }

  function handleSubtractCount() {
    setCount(count - 1)
  }

  function handleResetCount() {
    setCount(0)
  }
  return(
    <div>
      <p>{count}</p>
      <button onClick={handleAddCount}>Add</button>
      <button onClick={handleSubtractCount}>Subtract</button>
      <button onClick={handleResetCount}>Reset</button>
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