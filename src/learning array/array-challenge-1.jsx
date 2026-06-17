import {useState} from 'react'

function Array1() {
  const [list, isList] = useState(['Cat', 'Dog', 'Bird'])

  return(
    <div>
      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  )
}

export default Array1

// Challenge 1: Simple List Display
// File: src/array-challenge-1.jsx

// Create state: ['Cat', 'Dog', 'Bird']
// Display with .map()
// That's it. Just display.

