import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState('')
    let navigate = useNavigate();

    const login = () => {
        let data = JSON.parse(localStorage.getItem('reactData')) || []
        let user = data.find((item) => item.email === email && item.password === password)

        if(user){
            navigate('/userData', {state : {userData : user}})
            setEmail('')
            setPassword('')
        }else{
            setMsg("You Enter invalid Details")
            setTimeout(()=>{
                setMsg('')
            }, 3000)
        }
    }

    return (
        <>
            <h2>LoginPage</h2>
            <label htmlFor="email">Email address <span style={{ color: "red" }}>*</span></label>
            <br/>
            <input
                type="email"
                required
                id="email"
                name="email"
                value={email}
                style={{ marginTop: 20, width: "40vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br/>
            <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
            <br/>
            <input
                style={{ marginTop: 20, width: "40vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}
                type="password"
                required
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br/>
            <button type="submit" onClick={login} style={{ marginTop: 20, width: "20vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10, background:'green', color:'white' }}>Log In</button>
            <h2>{msg}</h2>
        </>
    )
}

export default LoginPage