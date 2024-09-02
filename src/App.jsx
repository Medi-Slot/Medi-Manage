import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Inventory from "./pages/inventoryPage/Inventory";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import toast, { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/dashboardPage/Dashboard";
import store from "./redux/store";
import { Provider } from 'react-redux';
import Appointments from "./pages/appointmentsPage/AppointmentsPage";

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
      <Routes>
          {/* Routes without Layout */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route element={<Layout />}>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/dashboard" element={<Dashboard />} />  
            <Route path="/appointments" element={<Appointments />} /> 

          </Route>
        </Routes>
        <Toaster />
      </Router>
      </Provider>
    </>
  );
}

export default App;
