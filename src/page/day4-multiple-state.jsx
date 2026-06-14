import {useState} from 'react'

function MultipleState() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleAgeChange(e) {
    setAge(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('name: ', {name})
    console.log('email: ', {email})
    console.log('age: ', {age})
  }

  function handleReset() {
    setName('')
    setEmail('')
    setAge(0)
  }

  return(
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input type='text' placeholder='Name' value={name} onChange={handleNameChange}/>
        <input type='email' placeholder='Email' value={email} onChange={handleEmailChange}/>
        <input type='number' placeholder='Age' value={age} onChange={handleAgeChange}/>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  )
}

export default MultipleState
//  Import useState
//  Create 3 separate states: name, email, age
//  Write 3 onChange handlers: handleNameChange, handleEmailChange, handleAgeChange
//  Write handleSubmit that logs all 3 values
//  Return form with 3 inputs and submit button
//  Add console.logs
//  Test in browser
//  Commit