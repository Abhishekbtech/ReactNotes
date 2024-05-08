import React, { useState } from 'react'
import Context from '../Context/Context'
import Child1 from './Child1'
import Child2 from './Child2'

function MainContext() {
    const [count, setCount] = useState(24)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }

    return (
        <>
            <h1>Context Api</h1>
            <Context.Provider value={{increment, decrement}}>
                <Child1 count={count}/>
                <Child2 count={count}/>
            </Context.Provider>
        </>
    )
}

export default MainContext