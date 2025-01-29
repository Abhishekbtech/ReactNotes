import React from 'react'
import { useParams } from 'react-router-dom'

function Line() {
    const { id } = useParams()
    return (
        <>
            <h2>Line  {id}</h2>
        </>
    )
}

export default Line