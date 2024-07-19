// create a stop watch with stop and reset and start and lap button 

import React, { useState, useEffect } from 'react';

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setTime(time + 1);
            }, 1000);
            setIntervalId(id);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, time]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    };

    const lap = () => {
        setLaps([...laps, time]);
    };

    const ft = (time) =>{
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const hour = Math.floor(minutes / 60)

        return `${hour} : ${minutes< 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {ft(time)}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={lap}>Lap</button>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {ft(lap)}</li>
                ))}
            </ul>
        </div>
    );
}

export default StopWatch;