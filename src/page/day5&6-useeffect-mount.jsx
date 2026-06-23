import {useEffect, useState} from 'react'

export default function Mount(){
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count:", count)
  }, [count])

  return(
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}


//  Import useState AND useEffect
//  Create component with a counter state
//  Write useEffect with empty dependency array []
//  Inside useEffect, log: "Component mounted"
//  Return heading showing count + button to increment
//  Load page → console logs "Component mounted" once
//  Click button to increment → counter increases, console does NOT log again
//  Click multiple times → console still doesn't log (proves useEffect only ran once)