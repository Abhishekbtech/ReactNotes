import React from 'react'
import { useParams } from 'react-router-dom'

function Line() {
    const { id } = useParams()
    return (
        <>
            <h1>Line  {id}</h1>
        </>
    )
}

export default Line