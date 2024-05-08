import React, { useState } from 'react'
import Context from '../Context/Context'
import Child1 from './Child1'
import Child2 from './Child2'

function MainContext() {
    const {age, setAge} = useState(24)
    return (
        <>
            <h1>Context Api</h1>
            <Context.Provider value={{age : age, setAge : setAge}}>
                <Child1/>
                <Child2/>
            </Context.Provider>
        </>
    )
}

export default MainContext