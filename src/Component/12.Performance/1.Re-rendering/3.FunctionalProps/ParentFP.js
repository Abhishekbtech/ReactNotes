import React, { useState, useMemo, useCallback } from 'react'
import ChildFP from './ChildFP'

function ParentFP() {
    const [count, setCount] = useState(0)
    const arr = useMemo(() => [1, 2, 3, 4], []);
    console.log('parent')
    const counterHandler = useCallback(() => {
        setCount((old) => old + 1)
    },[])

    return (
        <>
            <h1>Parent</h1>
            <h2>Count : {count}</h2>
            <ChildFP arr={arr} setCount={counterHandler}/>
        </>
    )
}

export default ParentFP