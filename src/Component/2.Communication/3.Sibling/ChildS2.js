import React from 'react'

function ChildS2(props) {
    const { info } = props
    return (
        <>
            <h1>ChildS2</h1>
            <div>{info ? info : "NO Operation YET"}</div>
        </>
    )
}

export default ChildS2