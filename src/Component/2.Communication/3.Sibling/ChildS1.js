import React,{useState} from 'react'

function ChildS1(props) {
    const [count, setCount] = useState(0);
    const { handler } = props;

    return (
        <>
            <h1>Counter ChildS1</h1>
            <div>{count}</div>

            <button
                onClick={() => {
                    setCount((oldVal) => oldVal - 1);
                    handler("DECREMENT");
                }}
            >
                - dec
            </button>

            <button
                onClick={() => {
                    setCount((oldVal) => oldVal + 1); 
                    handler("INCREMENT");
                }}
            >
                + inc
            </button>
        </>
    )
}

export default ChildS1