import {useState} from 'react'

function Counter(){
const [count, setCount] = useState(0)

function increment(){
  console.log(`the count before the render ${count}`)
  setCount(count + 1);
}

function decrement(){
  console.log(`the count before the render ${count}`)
  setCount(count + 1);
}

function reset(){
  console.log(`the count before the render ${count}`)
  setCount(0)
}

  return(
    <div>
      <p>{count}</p>
      <buton onClick={increment}>Add</buton>
      <buton onClick={decrement}>Subtract</buton>
      <buton onClick={reset}>Reset</buton>
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