import {useState} from 'react'

export default function Array3() {
  const [list, setList] = useState(['Cat', 'Dog', 'Bird'])

  function handleRemoveList(index){
    setList(list.filter((list, i) => i !== index))
  }

  return(
    <div>
      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}<button onClick={() => {handleRemoveList(index)}}>Remove</button></li>
        ))}
      </ul>
    </div>
  )
}

// Challenge 3: Remove Items
// File: src/array-challenge-3.jsx

// State: ['Cat', 'Dog', 'Bird']
// Display with .map()
// Delete button for each
// Use .filter() to remove
// No input field (hard-coded list)