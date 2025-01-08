import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin_Components/Signin";
import Home from "./components/Home_Componrnts/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default App;
