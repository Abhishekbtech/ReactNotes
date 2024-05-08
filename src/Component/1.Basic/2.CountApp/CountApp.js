import React, {useState} from 'react'

function CountApp() {
    const  [count, setCount] = useState(0)

    const addValue = (() => {
        //single value incremnt by one click
        // setCount((precount) => precount + 1);

        // on single click it will incress 4 time
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)

        // count don't incress more then 20
        if (count < 20) {
            setCount((prevCount) => prevCount + 1);
        }
    })

    const removeValue = () => {
        // decrease the count by one click
        // setCount((precount) => precount - 1);
    
        // on one click 4 time decrement
        // setCount((precount) => precount - 1);
        // setCount((precount) => precount - 1);
        // setCount((precount) => precount - 1);
        // setCount((precount) => precount - 1);
    
        // count don't decrement less then 0
        if (count > 0) {
          setCount((precount) => precount - 1);
        }
    };

    return (
        <div >
            <h1>Counter App</h1>

            <h2>count : {count}</h2>
            <p>count will work in 0 to 20 only</p>

            <button onClick={addValue}>Increment</button>
            <button onClick={removeValue}>Decrement</button>
        </div>
    );
}

export default CountApp