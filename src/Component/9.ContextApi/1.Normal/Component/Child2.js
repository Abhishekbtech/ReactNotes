import React,{useContext} from 'react'
import Context from '../Context/Context'

function Child2() {
    const data = useContext(Context)
    const {age, setAge} = data

    const handlingIncrement =() =>{
        setAge((old) => old + 1)
    }

    const handlingDecrement =() =>{
        setAge((old) => old - 1)
    }

    return (
        <>
            <h1>Child2</h1>
            <h2>Age: {age}</h2>
            <button onClick={handlingIncrement}>increment Age</button>
            <button onClick={handlingDecrement}>Decrement Age</button>
        </>
    )
}

export default Child2