import React from 'react'

function ChildFP(props) {
    const {arr, setCount} = props
    console.log('child')
    return (
        <>
            <h1>Child</h1>
            <button onClick={() => setCount()}>Click me</button>
            {
                arr.map((item) => (
                    <h2 key={item}>{item}</h2>
                ))
            }
        </>
    )
}

export default React.memo(ChildFP)