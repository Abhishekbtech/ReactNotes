import React, { useEffect, useRef } from 'react'

function SimpleFormInputBoxComponent() {
    const inputBoxReference = useRef();

    useEffect(() => {
        inputBoxReference.current.focus();
        console.log(inputBoxReference)
    });

    return (
        <>
            <h1>SimpleFormInputBoxComponent</h1>

            <input
                ref={inputBoxReference}
                id="inputbox"
                onChange={() => { }}
                type="text"
                placeholder="enter message"
            />

        </>
    );
}

export default SimpleFormInputBoxComponent