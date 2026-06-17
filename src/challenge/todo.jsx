import {useState} from 'react'

function Todo() {
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  function handleInput(e) {
    setInput(e.target.value)
  }

  function handleAddTodo(e) {
    e.preventDefault()
    setTodo([...todo, input])
    setInput('')
  }

  function handleRemoveTodo(index) {
    setTodo(todo.filter((todo, i) => i !== index))
  }

  function handleVisible() {
    setIsVisible(!isVisible)
  }

  return(
    <div>
      <div>
        <form onSubmit={handleAddTodo}>
          <input type='text' placeholder='Enter anything' value={input} onChange={handleInput} />
          <button type='submit'>Submit</button>
        </form>
      </div>

      <button onClick={handleVisible}>{isVisible ? 'Display':'Hide'}</button>

      {isVisible && (
        <ul>
          {todo.map((todo, index) => (
            <li key={index}>{todo}<button onClick={() => handleRemoveTodo(index)}>Delete</button></li>
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