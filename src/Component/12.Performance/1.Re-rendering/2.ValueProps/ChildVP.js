import React from 'react'

function ChildVP(props) {
    const {arr} = props
    console.log('child')
    return (
        <>
            <h1>Child</h1>
            {
                arr.map((item) => (
                    <h2 key={item}>{item}</h2>
                ))
            }
        </>
    )
}

export default React.memo(ChildVP)