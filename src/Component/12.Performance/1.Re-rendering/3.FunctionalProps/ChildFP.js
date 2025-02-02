import React from 'react'

function ChildFP(props) {
    const {setCount} = props
    console.log('child')
    return (
        <>
            <h1>Child</h1>
            <button onClick={() => setCount()}>Click me</button>
        </>
    )
}

export default React.memo(ChildFP)