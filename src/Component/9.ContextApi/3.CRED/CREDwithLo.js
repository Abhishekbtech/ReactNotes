import { useState, useEffect} from 'react'
import { ToDoContext } from './Context/ToDoContext'
import ToDoFrom from './Component/ToDoFrom'
import ToDoList from './Component/ToDoList'

function CREDwithLo() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <ToDoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo}}>
            <h1>To DO List With Context API (CRED)</h1>
            <ToDoFrom/>
            {
                todos.map((todo) => (
                    <div key={todo.id}
                    className='w-full'
                    >
                      <ToDoList todo={todo} />
                    </div>
                  ))
            }
        </ToDoContext.Provider>
    )
}

export default CREDwithLo