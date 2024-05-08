import React, {useState} from 'react'

function SingleState() {
    const [state, setState] = useState({count: 0, name: "Blank"});

    return (
        <>  
            <div>SingleState</div>
            <div style={{ margin: "20px", border: "1px solid black" }}>{state.name}</div>
            <div style={{ margin: "20px", border: "1px solid black" }}>{state.count}</div>

            <button onClick={() => { setState((oldState) => {
                        return {
                            ...oldState,
                            count: oldState.count + 1,
                        };
                    });
                }}
            >
                CLAP
            </button>

            <button
                onClick={() => {
                    setState((oldValue) => {
                        return {
                            ...oldValue,
                            name: "Abhishek",
                        };
                    });
                }}
            >
                Abhishek
            </button>

            <button
                onClick={() => {
                    setState((oldValue) => {
                        return {
                            ...oldValue,
                            name: "Chauhan",
                        };
                    });
                }}
            >
                Chauhan
            </button>
        </>
        
    )
}

export default SingleState