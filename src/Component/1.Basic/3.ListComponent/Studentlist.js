import React from 'react'
import ListData from './ListData';


function Studentlist() {

    const students = [
        {"name":"Abhishek","classs":2, "color": "#ff6347"},  // red
        {"name":"Ajay","classs":3, "color": "#4cd964"},      // green
        {"name":"Rahul","classs":1},    
    ]

    return (
        <>
            <h1>Studentlist</h1>

            {
                students.map((student, index) => (
                    <ListData key={index} name={student.name} classs={student.classs} color={student.color} />
                ))
            }
        </>
        
    )
}

export default Studentlist