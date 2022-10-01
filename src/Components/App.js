import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Message from "./Message"
import Signup from "./Signup";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/message" element={<Message />} />
        </Routes>
    </div>
  );
}

export default App;