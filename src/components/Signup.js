import React, { useState } from "react";
import "./Signup.css";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        // xhr.open("POST", "/api/signup", true);
        xhr.open("POST", "http://localhost:8080/api/signup", true);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status === 200) {
                setMessage(xhr.responseText);
            } else {
                setMessage("Registration failed: " + xhr.responseText);
            }
        };
        xhr.onerror = () => {
            setMessage("An error occurred during the request.");
        };
        xhr.send(JSON.stringify(formData));
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h1>Signup</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default Signup;