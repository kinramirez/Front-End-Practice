import {useState} from 'react'

export default function Array2() {
  const [input, setInput] = useState('')
  const [list, setList] = useState(['Cat', 'Dog', 'Bird'])


  function handleInput(e){
    setInput(e.target.value)
  }

  function handleAddList(e) {
    e.preventDefault()
    setList([...list, input])
    setInput('')
  }

  function handleDelete(index){
    setList(list.filter((list, i) => i !== index))
  }

  return(
    <div>
      <form onSubmit={handleAddList}>
        <input type='text' placeholder='mattmatt' value={input} onChange={handleInput}/>
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}<button onClick={() => handleDelete(index)}>delete</button></li>
        ))}
      </ul>

    </div>
  )
}


// Challenge 2: Add Items
// File: src/array-challenge-2.jsx

// State: ['Cat', 'Dog', 'Bird']
// Input field
// Button to add item
// Use [...items, newItem]
// Display with .map()

