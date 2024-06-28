import React, { useReducer } from 'react'

// useReducer is a React Hook that provides a way to manage state in a component, particularly when dealing with complex state logic or multiple state transitions. It is an alternative to useState and is particularly useful for managing state that involves multiple sub-values or when the next state depends on the previous one.

const reducerFunction = (state, action) => {
    const { type } = action;

    if (type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1,
        };
    } else if (type === "increment") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    } else if (type === "RESET") {
        return {
            ...state,
            counter: 0,
        };
    }else {
        return state;
    }
}

const defaultVale = {
    name: "Abhishek",
    age: 24,
    counter: 0
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducerFunction, defaultVale)

    return (
        <>
            <h1>Counter Reducer App</h1>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <p>Counter: {state.counter}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET"})}>Reaset</button>
        </>
    )
}

export default CounterReducer