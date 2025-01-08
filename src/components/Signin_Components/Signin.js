import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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
        // xhr.open("POST", "/api/signin", true);
        xhr.open("POST", "http://localhost:8080/api/signin", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status === 200) {
                setMessage("Login successful! Redirecting...");
                setTimeout(() => navigate("/home"), 1000);
            } else {
                setMessage("Invalid username or password.");
            }
        };
        xhr.onerror = () => {
            setMessage("An error occurred during the request.");
        };
        xhr.send(JSON.stringify(formData));
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit} className="signin-form">
                <h1>Sign In</h1>
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
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default Signin;