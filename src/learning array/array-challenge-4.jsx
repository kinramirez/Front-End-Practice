import {useState} from 'react'

export default function Array4() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  
  function handleInput(e){
    setInput(e.target.value)
  }

  function handleAddList(e){
    e.preventDefault()
    setList([...list, input])
    setInput('')
  }

  function handleRemoveList(index){
    setList(list.filter((list, i) => i !== index))
  }

  return(
    <div>
      <form onSubmit={handleAddList}>
        <input type='text' placeholder='Enter any input' value={input} onChange={handleInput}/>
        <button type='submit'>Add</button>
      </form>

      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}<button onClick={() => {handleRemoveList(index)}}>Delete</button></li>
        ))}
      </ul>
    </div>
  )
}

// Challenge 4: Add AND Remove
// File: src/array-challenge-4.jsx

// State: [] (empty)
// Input field
// Add button (spread operator)
// Display with .map()
// Delete button for each (filter)
// This is like Todo, but simpler