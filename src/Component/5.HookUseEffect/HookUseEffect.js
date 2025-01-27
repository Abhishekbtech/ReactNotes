import React,{useEffect, useState} from 'react'

// using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
// Mounting Phase: When the component is first rendered in the DOM.
// Updating Phase: When the component is re-rendered due to state or props changes.
// useEffect(callback,[])
// useEffect(callback)
// useEffect(callback,[deps])

// The useEffect hook runs during both phases. However, the cleanup function inside useEffect is specifically executed during the unmounting phase, which is when the component is removed from the DOM.


function HookUseEffect() {
    // mounting face
    useEffect(()=>{
        console.log("mounting useEffect")
    },[])

    // unmouting face
    useEffect(() => {
        console.log('unmouting Effect ran');
    
        return () => {
          console.log('unmounting Cleanup ran');
        };
    }, []);

    //udpate face
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('update Effect ran');
    }, [count]);

    return (
        <>
            <h1>UseEffect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>   
    )
}

export default HookUseEffect