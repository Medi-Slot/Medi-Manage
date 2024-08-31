import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Navbar from "./components/common/navbar/Navbar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
