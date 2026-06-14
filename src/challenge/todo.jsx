import {useState} from 'react'

function Todo() {
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState([])
  const [isVisible, setIsVisible] = useState(true)

  function handleInputChange(e){
    setInput(e.target.value)
  }

  function handleAddTodo(e){
    e.preventDefault()
    setTodo([...todo, input])
    setInput('')
  }

  function handleDeleteTodo(index){
    setTodo(todo.filter((todo, i) => i !== index))
  }

  function handleReset(){
    setTodo([])
  }

  function handleDisplay(){
    setIsVisible(!isVisible)
  }

  return(
    <div>
      
      <form onSubmit={handleAddTodo} onReset={handleReset}>
        <input type='text' value={input} onChange={handleInputChange}></input>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </form>

      <button onClick={handleDisplay}>{!isVisible ? 'Display' : 'Hide'}</button>
      {isVisible && (
        <ul>
          {todo.map((todo, index) =>(
            <li key={index}>{todo}<button onClick={() => handleDeleteTodo(index)}>Delete</button></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todo
// Features:
// Input field to type a todo
// Button to add todo to a list
// Display list of todos
// Delete button for each todo
// Toggle button to show/hide the list
// Clear all todos button