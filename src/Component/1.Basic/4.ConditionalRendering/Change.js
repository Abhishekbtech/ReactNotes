import React from 'react'

function Change({color}) {
    return (
        <div style={{border: "1px solid black",
        background: color,
        width: "200px",
        height: "200px",}}></div>
    )
}

export default Change