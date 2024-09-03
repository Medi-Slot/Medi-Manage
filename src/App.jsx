import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Inventory from "./pages/inventoryPage/Inventory";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import toast, { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboardPage/Dashboard";
import store from "./redux/store";
import { Provider } from "react-redux";
import PatientPage from "./pages/patientPage/PatientPage";
import InventoryPage from "./pages/inventoryPage/InventoryPage";
import Appointments from "./pages/appointmentsPage/Appointments";
import InventoryOverview from "./pages/inventoryPage/InventoryOverview";
import DoctorPage from "./pages/doctorPage/DoctorPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { setUser, logout } from "./redux/slices/authSlice";
import NotFound from "./pages/notFound/NotFound";
import ProtectedRoute from "./components/common/protectedRoute/ProtectedRoute";
function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch(setUser(user));
      } else {
        store.dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<Layout />}>
              <Route
                path="/inventory"
                element={
                  <ProtectedRoute>
                    <Inventory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patient"
                element={
                  <ProtectedRoute>
                    <PatientPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/inventory/:category"
                element={
                  <ProtectedRoute>
                    <InventoryPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <Appointments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor"
                element={
                  <ProtectedRoute>
                    <DoctorPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/inventory/:category/:productId"
                element={
                  <ProtectedRoute>
                    <InventoryOverview />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster />
        </Router>
      </Provider>
    </>
  );
}

export default App;
