import {useState} from 'react'

function FormInput() {
  const [input, setInput] = useState('')
  
  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(input)
  }

  function handleReset() {
    setInput('')
  }

  return(
    <div> 
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input type='text' value={input} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </form>
      <div><p>{input}</p></div>
    </div>
  )
}

export default FormInput
//  Import useState
//  Create FormInput component with input state
//  Write handleChange function
//  Write handleSubmit function
//  Write handleClear function
//  Return form with input + buttons
//  Add console.logs
//  Test in browser