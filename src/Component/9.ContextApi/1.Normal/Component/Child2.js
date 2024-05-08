import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

function Child2({ count }) {
    const data = useContext(Context);
    const { increment, decrement } = data;
    const [age, setAge] = useState(count);

    const handlingIncrement = () => {
        setAge((old) => old + 1);
        increment();
    };

    const handlingDecrement = () => {
        setAge((old) => old - 1);
        decrement();
    };

    return (
        <>
            <h1>Child2</h1>
            <h2>Age: {age}</h2>
            <button onClick={handlingIncrement}>Increment Age</button>
            <button onClick={handlingDecrement}>Decrement Age</button>
        </>
    );
}

export default Child2;
