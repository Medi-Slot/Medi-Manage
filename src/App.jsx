import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Inventory from "./pages/inventoryPage/Inventory";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
