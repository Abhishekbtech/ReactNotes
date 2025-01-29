import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
    { name: 'Post 1', path: 1 },
    { name: 'Post 2', path: 2 },
    { name: 'Post 3', path: 3 },
    { name: 'Post 4', path: 4 }
];

function AboutPage() {
    return (
        <>
            <h2>About Page</h2>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.path}>
                            <Link to={`/about/post/${post.path}`}>{post.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default AboutPage