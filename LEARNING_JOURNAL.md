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