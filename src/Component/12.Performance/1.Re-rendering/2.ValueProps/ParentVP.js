import React, { useMemo, useState } from 'react'
import ChildVP from './ChildVP'

function ParentVP() {
    const [count, setCount] = useState(0)
    console.log('parent')
    const arr = useMemo(()=> [1, 2, 3, 4], [])

    return (
        <>
            <h1>Performance with useMemo</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount((old) => old + 1)}>Click me</button>
            <ChildVP arr={arr}/>
        </>
    )
}

export default ParentVP