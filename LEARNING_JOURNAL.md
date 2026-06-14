# React Learning Journal

## Day 1: Counter Component
- **Date:** June 3, 2026
- **What I Learned:**
  - useState hook basics
  - State is component memory
  - setState triggers re-renders
  - Functions inside components can access state (closures)
- **Key Code Pattern:**
```javascript
  const [count, setCount] = useState(0)
  setCount(count + 1)  // Updates state + re-renders
```
- **Aha Moment:** State updates are asynchronous
- **Challenge:** Understanding why console.log shows old value before setState
-- **Code:** src/page/day1-counter.jsx

## Day 2: Form Input Component
- **Date:** June 5, 2026
- **What I Learned:**
  - onChange Handler fires on every keystroke
  - e.target.value gets input value
  - Controlled inputs: value={state} + onChange={handler}
  - e.preventDefault() stops default behavior (page reload on form submit)
- **Key Code Pattern:**
```javascript
  function handleChange(e){
    setInput(e.target.value)
  }
  <input value={input} onChange={handleChange} />
```
- **Aha Moment:** Input doesn't show the value without value={state}
- **Code:** src/page/day2-form-input.jsx

## Day 3: Toggle Component
- **Date:** June 6, 2026
- **What I Learned:**
  - useState with boolean values
  - Conditional Rendering using AND Operator (&&)
  - ! operator flips boolean (true → false, false → true)
- **Key Code Pattern:**
```javascript
  const [isVisible, setIsVisible] = useState(false)
  setIsVisible(!isVisible)  // Toggle
  {isVisible && <p>Show this</p>}
```
-**Aha Moment:** Text display is have different value from the console.log since the console.log shows the old value adn the text display shows the new value after re-rendering
- **Code:** src/page/day3-toggle.jsx

## Day 4: Multiple Form
- **Date:** June 7, 2026
- **What I Learned:**
  - Multiple useState for multiple fields
  - Multiple onChange handlers
  - Extracting multiple input values
  - Controlled inputs for all fields
- **Key Code Pattern:**
```javascript
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
```
- **Code:** src/page/day4-multiple-state.jsx

## UseState Challenge
- **Date:** June 14, 2026
- **What I Learned:**
  - Using .map() to display array items
  - Using .filter() to remove items from array
  - Using spread operator (...) to create a new array without mutating original
  - Conditional rendering with boolean state
- **Key Code Pattern:**
```javascript

  //Add item to array
  setTodo([...items, input])

  //Remove item from array
  setTodo(todo.filter((todo, i) => i !== index))

  //Display array
  {todo.map((item, index) => (
    {item}
  ))}

  //Toglle Visibilitiy
  {isVisible && ...}
```
- **Aha Moment:** Spread operator creates a NEW array, doesn't mutate the old one
- **Code:** src/challenge/todo.jsx