import React from 'react'

function ListData(props) {
    const {classs, name, color = "lightblue" } = props;

    return (
        <>
            <div style={{background:color}}>
                <h1>{name}</h1>
                <p>class : {classs}</p>
            </div>
        </>
        
    )
}

export default ListData