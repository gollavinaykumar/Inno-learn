import React from "react";
import "./App.css";
import SignInSide from "./Components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpForm from "./Components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/login" element={<SignInSide />}></Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
