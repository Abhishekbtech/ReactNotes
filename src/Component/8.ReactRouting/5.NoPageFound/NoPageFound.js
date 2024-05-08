import React from 'react'
import { Link } from 'react-router-dom'

function NoPageFound() {
    return (
        <>
            <h1>No Page Found</h1>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
        </>
    )
}

export default NoPageFound