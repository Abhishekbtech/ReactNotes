import React, { useRef } from 'react'

const default_Val = 20

function BasicRef() {
    const ref = useRef(default_Val)
    const { current } = ref
    console.log(ref)
    
    function onClickHandler() {
        console.log("--------- PREV VALUE --------", ref.current);
        ref.current = ref.current + 1;
    
        console.log("--------- Updated VALUE --------", ref.current);
    }

    return (
        <>
            <h1>use Ref</h1>
            <p>Current Val: {current}</p>
            <button onClick={onClickHandler}>+</button>
        </>
    )
}

export default BasicRef

/**
 *  useRef -> preservation of data (just like useState) but without the re-rendering.
 *  1. Not only it stores the data (number, string, boolean, character)
 *  2. It can store the REFERENCE to the OBjects (array , Object and Elements)
 *
 */