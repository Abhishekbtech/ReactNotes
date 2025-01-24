import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedAge = localStorage.getItem('age');

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
        localStorage.setItem('username', username);
        localStorage.setItem('age', age);
        alert('Data saved!');
    };

    return (
        <div>
            <h1>Local Storage Example</h1>
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
                <button type="submit">Store to local Storage</button>
            </form>
            <h2>Stored Data:</h2>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default LocalStorage;