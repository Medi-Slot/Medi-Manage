import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import toast, { Toaster } from 'react-hot-toast';

import Navbar from "./components/common/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
