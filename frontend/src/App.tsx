import React from "react";
import "./App.css";
import SignInSide from "./Components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpForm from "./Components/Signup";
import UserProfile from "./Components/UserProfile";
import Profile from "./Components/Profile";
import JSFullCourse from "./Components/JavaScriptFullCourse";
import JavaFullCourse from "./Components/JavaFullCourse";
import MernStack from "./Components/MernStack";
import SpringBoot from "./Components/SpringBoot";
import ML from "./Components/MachineLearning";
import AI from "./Components/ArtificialIntelligence";
import Pricing from "./Components/Pricing";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/login" element={<SignInSide />}></Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/Home/user" element={<UserProfile />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Home/javascript" element={<JSFullCourse />}></Route>
        <Route path="/Home/java" element={<JavaFullCourse />}></Route>
        <Route
          path="/Home/javascript fullstack"
          element={<MernStack />}
        ></Route>
        <Route path="/Home/java fullstack" element={<SpringBoot />}></Route>
        <Route path="/Home/machine learning" element={<ML />}></Route>
        <Route path="/Home/AI" element={<AI />}></Route>
        <Route path="/Home/pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
