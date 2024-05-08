import React, { useEffect, useState } from 'react'

function MyGitHub() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Abhishekbtech')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <>
            <h1>My Github</h1>
            <h2>Name :- {data.name}</h2>
            <h3>UserName :- {data.login}</h3>
            <p>Follower :- {data.followers}</p>
            <img src={data.avatar_url} alt="avatar" height='300px' width='300px'/>
        </>
    )
}

export default MyGitHub