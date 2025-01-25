import React,{useState} from 'react'

function ChildS1(props) {
    const [count, setCount] = useState(0);
    const { handler } = props;

    return (
        <>
            <h3>Counter ChildS1</h3>
            <div>{count}</div>

            <button
                onClick={() => {
                    setCount((oldVal) => oldVal - 1);
                    handler("DECREMENT");
                }}
                style={{marginRight:'10px'}}
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