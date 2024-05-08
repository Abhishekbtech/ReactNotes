import React, { useState, useContext } from 'react'
import { ToDoContext } from '../Context/ToDoContext'

function ToDoList({ todo }) {
    const data = useContext(ToDoContext)
    const { updateTodo, deleteTodo, } = data
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    return (
        <>
            <input
                type="text"
                style={{
                    borderColor: isTodoEditable ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>

        </>
    )
}

export default ToDoList