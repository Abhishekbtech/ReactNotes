import React,{ useEffect, useRef } from 'react'
import Input from './Input';

function InputComponentForm() {
    const inputBoxReference = useRef();

    useEffect(() => {
        inputBoxReference.current.focus();
        console.log(inputBoxReference, "1");
    });

    console.log(inputBoxReference, "2");
    return (
        <>
        <h1>Input component form</h1>
        <Input ref={inputBoxReference} asd={inputBoxReference} />
        </>
    );
}

export default InputComponentForm