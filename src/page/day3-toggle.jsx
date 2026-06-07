import {useState} from 'react'

function Toggle(){
    const [isVisible, setIsVisible] = useState(false)
    console.log(isVisible)
    function handleToggle(){
      setIsVisible(!isVisible)
    }

    return(
      <div>
        {isVisible && <p>This is true</p>}
        {!isVisible && <p>This is false</p>}
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