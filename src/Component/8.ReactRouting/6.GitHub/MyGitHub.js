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
            <h2>My Github</h2>
            <h3>Name :- {data.name}</h3>
            <h4>UserName :- {data.login}</h4>
            <p>Follower :- {data.followers}</p>
            <img src={data.avatar_url} alt="avatar" height='300px' width='300px'/>
        </>
    )
}

export default MyGitHub