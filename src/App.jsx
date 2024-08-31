import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Navbar from "./components/common/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
