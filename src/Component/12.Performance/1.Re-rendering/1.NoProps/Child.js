import React from 'react'

function Child() {
    console.log("child rendering");
    return (
        <h1>Child</h1>
    )
}

export default React.memo(Child)