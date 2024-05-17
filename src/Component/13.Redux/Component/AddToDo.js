import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Reduer/todoSlice'

function AddToDo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <h1>Add Todo</h1>
            <form onSubmit={addTodoHandler}>
                <input type='text' placeholder="Enter a Todo..." value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit" > Add Todo </button>
            </form>
        </>
    )
}

export default AddToDo