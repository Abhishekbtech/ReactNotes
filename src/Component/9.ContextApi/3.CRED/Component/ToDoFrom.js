import React, {useState, useContext} from 'react'
import { ToDoContext } from '../Context/ToDoContext'

function ToDoFrom() {
    const data = useContext(ToDoContext)
    const [todo, setTodo] = useState("")
    const {addTodo} = data

    const add = (e) => {
        e.preventDefault()
  
        if (!todo) return
  
        addTodo({ todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={add}>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default ToDoFrom