import React from 'react'

function ListData(props) {
    const {classs, name, color = "lightblue" } = props;

    return (
        <>
            <div style={{background:color}}>
                <h3>{name}</h3>
                <p>class : {classs}</p>
            </div>
        </> 
    )
}

export default ListData