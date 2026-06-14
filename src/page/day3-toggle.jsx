import {useState} from 'react'

function Toggle() {
  const [isToggle, setIsToggle] = useState(false)

  function handleToggle() {
    setIsToggle(!isToggle)
    console.log(isToggle)
  }

  return(
    <div>
      {isToggle && <p>The value is true</p>}
      {!isToggle && <p>The value is false</p>}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default Toggle 
//  Import useState
//  Create state with boolean (true/false) — use useState(false)
//  Write handleToggle function that flips true ↔ false
//  Return:

// Button that calls handleToggle
// Conditional rendering: show/hide text based on state


//  Add console.logs to see when toggle happens
//  Test in browser — button toggles visibility
//  Commit and push