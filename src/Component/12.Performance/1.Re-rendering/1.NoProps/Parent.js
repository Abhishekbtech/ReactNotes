import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0)
    console.log("parent rendering");
    return (
        <>
            <h1>Parent</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount((old) => old + 1)}>Click me</button>
            <Child/>
        </>
        
    )
}

export default Parent