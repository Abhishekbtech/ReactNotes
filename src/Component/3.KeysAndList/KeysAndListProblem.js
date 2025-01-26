import React,{useState} from 'react'

function KeysAndListProblem() {
    const [students, setStudents] = useState([])

    return (
        <>
            <h1>Keys And List Problem</h1>
            <div>
                <input id="inputBox" type="text" placeholder='Enter Student Name'/>

                <button
                    onClick={() => {
                        const element = document.getElementById("inputBox");
                        const value = element.value;
                        setStudents((oldVal) => [value, ...oldVal]);
                    }}
                >
                    Add Item In List
                </button>
            </div>

            {
                students.map((student) => 
                    <div
                        style={{
                        border: "1px solid black",
                        background: "green",
                        margin: "10px",
                        padding: "10px",
                        }}
                    >
                        {student}
                    </div>
                )
            }
        </>
    )
}

export default KeysAndListProblem