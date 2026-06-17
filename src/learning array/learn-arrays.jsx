import {useState} from 'react'

function LearnArrays() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange'])

  function handleAddItem(){
    setItems([...items, 'Grape'])
  }

  function handleDeleteItem(index) {
    setItems(items.filter((item, i) => i !== index))
  }

  return(
    <div>
      <button onClick={handleAddItem}>Add Grape</button>
      <ul>
        {items.map((item, index) =>(
          <li key={index}>{item} <button onClick={() => handleDeleteItem(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  )
}

export default LearnArrays
// State

//  Create items state initialized with 3 items: ['Apple', 'Banana', 'Orange']


// Display List

//  Use .map() to loop through items
//  Display each item in a <li> tag
//  Add a key={index} to each <li>


// Add Button

//  Create button that says "Add Grape"
//  Create handleAdd function
//  Use spread operator: [...items, 'Grape']
//  Call setItems() with the new array
//  Add console.log to see the items array after adding


// Delete Button

//  For each item in the list, add a "Delete" button
//  Create handleRemove(index) function
//  Use .filter() to remove item at that index
//  Call setItems() with the filtered array
//  Add console.log to see the items array after deleting


// Testing

//  Load component → see 3 items displayed
//  Click "Add Grape" → 4 items shown, console logs the new array
//  Click "Delete" on any item → it disappears, console logs updated array
//  Click multiple times → works every time