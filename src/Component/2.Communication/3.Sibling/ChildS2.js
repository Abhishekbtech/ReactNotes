import React from 'react'

function ChildS2(props) {
    const { info } = props
    return (
        <>
            <h3>ChildS2</h3>
            <div>{info ? info : "NO Operation YET"}</div>
        </>
    )
}

export default ChildS2