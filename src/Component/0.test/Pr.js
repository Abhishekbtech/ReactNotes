import React from 'react'
import Child from './Child'

function Pr() {
    const ab = "hello i am from parent"
  return (
    <div>
        <h1>pr</h1>
        <button onClick={() => {
            console.log("a")
        }}>call child</button>
    </div>
  )
}

export default Pr