import React,{useEffect, useState} from 'react'

function DigitalClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []) // Empty dependency array ensures that effect runs only once after initial render

    return (
        <>
            <h1>DigitalClock</h1>
            <h2>{time}</h2>
        </>
    )
}

export default DigitalClock