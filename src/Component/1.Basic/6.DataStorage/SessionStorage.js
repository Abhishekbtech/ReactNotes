import React, { useState, useEffect } from 'react';

const SessionStorage = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    // Load data from sessionStorage when the component mounts
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        const storedAge = sessionStorage.getItem('age');

        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (storedAge) {
            setAge(storedAge);
        }
    }, []);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Store data in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('age', age);
        alert('Data saved in session storage!');
    };

    return (
        <div>
            <h1>Session Storage Example</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Store to Session Storage</button>
            </form>
            <h2>Stored Data:</h2>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default SessionStorage;