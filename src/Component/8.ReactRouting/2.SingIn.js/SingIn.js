import React,{useState} from 'react'

function SingIn() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [successMessage, setSuccessMessage] = useState("");

    const handleCreateAccount = (event) => {
        event.preventDefault();
        const formData = { fullName, phoneNumber, email, password};
        let store = JSON.parse(localStorage.getItem("reactData")) || [];
        const existingUser = store.find(user => user.email === email || user.phoneNumber === phoneNumber);
    
        if (existingUser) {
            alert("Email or phone number already exists!");
            return;
        }

        store.push(formData)
        localStorage.setItem("reactData", JSON.stringify(store));

        setSuccessMessage("You have successfully registered!")
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <h2>Sing IN Page</h2>
            <form onSubmit={handleCreateAccount}>
                <label htmlFor="fullname">Full Name <span style={{ color: "red" }}>*</span></label>
                <br/>
                <input
                    type="text"
                    style={{ marginTop: 20, width: "40vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}
                    id="fullname"
                    name="fullname"
                    value={fullName}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                />
                <br />
                <br/>
                <label htmlFor="phone">Phone number <span style={{ color: "red" }}>*</span></label>
                <br/>
                <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phoneNumber}
                    minLength='10'
                    maxLength='10'
                    style={{ marginTop: 20, width: "40vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                <br/>
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
                <br/>
                <br/>
                <button type="submit" style={{ marginTop: 20, width: "20vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10, background:'green', color:'white' }}>Create Account</button>
            </form>
            <h2>{successMessage}</h2>
        </>
    )
}

export default SingIn