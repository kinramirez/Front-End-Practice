import {useState} from 'react'

export default function Array5() {
  const [list, setList] = useState(['Task 1', 'Task 2', 'Task 3'])
  const [input, setInput] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editingIndex, setIsEditingIndex] = useState(null)

  function handleEdit(){
    setIsEditing(!isEditing)
  }

  function handleInput(e) {
    setInput(e.target.value)
  }

  return(
    <div>
      <ul>
        {list.map((list, index) => (
          <li key={index}>
            {editingIndex !== index ? (
              <div>{list}<button onClick={() => handleEdit(index)}>Update</button></div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleInput}/>
                <button type='submit'>Save</button>
              </form>              
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}


// Challenge 5: Edit Item
// File: src/array-challenge-5.jsx

// State: ['Task 1', 'Task 2', 'Task 3']
// Display with .map()
// Edit button for each item
// When clicked, allow user to type new value
// Update that item in the array
// (This teaches you how to update ONE item in an array)