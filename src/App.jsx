import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Inventory from "./pages/inventoryPage/Inventory";
import Layout from "./layout/Layout";
import Navbar from "./components/common/navbar/Navbar";
import Dashboard from "./pages/dashboardPage/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
