import React, { useState, useCallback } from 'react'
import ChildFP from './ChildFP'

function ParentFP() {
    const [count, setCount] = useState(0)
    console.log('parent')
    const counterHandler = useCallback(() => {
        setCount((old) => old + 1)
    },[])

    return (
        <>
            <h1>Performance example for useCallback</h1>
            <h2>Count : {count}</h2>
            <ChildFP setCount={counterHandler}/>
        </>
    )
}

export default ParentFP