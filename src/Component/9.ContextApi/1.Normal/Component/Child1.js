import React,{useContext} from 'react'
import Context from '../Context/Context'

function Child1() {
    const data = useContext(Context)
    const {age} = data
    return (
        <>
            <h1>Child1 {age}</h1>
        </>
    )
}

export default Child1