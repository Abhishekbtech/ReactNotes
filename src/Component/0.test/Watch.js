import React, { useEffect, useState } from 'react'

function Watch() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect( () => {
        const Id = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(Id)
    }, [])

    return (
        <>
            <h1>Watch</h1>
            <h2>{time}</h2>
        </>
    )
}

export default Watch