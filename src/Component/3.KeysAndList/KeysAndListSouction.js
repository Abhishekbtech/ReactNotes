import React,{useState} from 'react'

function KeysAndListSouction() {
    const [students, setStudents] = useState([])
    return (
        <>
            <h1>Keys And List solution</h1>
            <div>
                <input id="inputBox1" type="text" placeholder='Enter Student Name'/>

                <button
                    onClick={() => {
                        const element = document.getElementById("inputBox1");
                        const value = element.value;
                        setStudents((oldVal) => [value, ...oldVal]);
                    }}
                >
                    Add Item In List
                </button>
            </div>

            {
                students.map((student, index) => 
                    <div
                        key={index}
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

export default KeysAndListSouction