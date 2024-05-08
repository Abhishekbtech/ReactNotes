import React from 'react'
import ListData from './ListData';


function Studentlist(props) {
    // const { students = [
    //     {"name":"Abhishek","classs":2, "color": "#ff6347"},  // red
    //     {"name":"Ajay","classs":3, "color": "#4cd964"},      // green
    //     {"name":"Rahul","classs":1},                          // default color
    // ] } = props;

    const students = [
        {"name":"Abhishek","classs":2, "color": "#ff6347"},  // red
        {"name":"Ajay","classs":3, "color": "#4cd964"},      // green
        {"name":"Rahul","classs":1},    
    ]

    return (
        <>
            <div>Studentlist</div>
            {/* {
                students.map((student, index) => {
                    const {name, classs, color } = student;
                    return(
                        <ListData key={index} name={name} classs={classs} color={color}/>
                    )
                })
            } */}

            {
                students.map((student, index) => (
                    <ListData key={index} name={student.name} classs={student.classs} color={student.color} />
                ))
            }
        </>
        
    )
}

export default Studentlist