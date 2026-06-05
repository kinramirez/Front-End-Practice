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

    function handleClear(){
        setInput('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange} type="text"></input>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}




//  Import useState
//  Create FormInput component with input state
//  Write handleChange function
//  Write handleSubmit function
//  Write handleClear function
//  Return form with input + buttons
//  Add console.logs
//  Test in browser