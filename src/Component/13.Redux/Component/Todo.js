import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Reduer/todoSlice'


function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <h1>To DO</h1>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.text}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>
                ))
            }
        </>
    )
}

export default Todo