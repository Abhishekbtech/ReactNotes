import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function UserData() {
    const navigate = useNavigate();
    const location = useLocation();
    let data = location.state.userData;
    let photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISuukVSb_iHDfPAaDKboFWXZVloJW9XXiwGYFab-QwlAYQ3zFsx4fToY9ijcVNU5ieKk&usqp=CAU';

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <>
            <h1>User Data</h1>
            <img src={photo} alt='image'/>
            <h2>{data.fullName}</h2>
            <h3>{data.email}</h3>
            <h3>{data.phoneNumber}</h3>
            <br/>
            <br/>
            <button onClick={handleLogout}>Log out</button>
        </>
    );
}

export default UserData;
