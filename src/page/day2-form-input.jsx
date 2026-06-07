import {useState} from 'react'

function FormInput(){
    const [input, setInput] = useState('')

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
    }

    function reset(){
        setInput('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={handleChange} placeholder='Name' />
                <button type='submit'>Submit</button>
                <button type='button' onClick={reset}>Reset</button>
            </form>
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