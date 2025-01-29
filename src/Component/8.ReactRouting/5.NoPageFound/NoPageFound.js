import React from 'react'
import { Link } from 'react-router-dom'

function NoPageFound() {
    return (
        <>
            <h2>No Page Found</h2>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
        </>
    )
}

export default NoPageFound