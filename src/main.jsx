import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./Firebase";
import { setUser, logout } from "./redux/slices/authSlice";
import store from "./redux/store";

// Functional component to handle authentication state changes
const AuthListener = () => {
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

  return null; // This component doesn't render anything
};

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthListener />
    <App />
  </StrictMode>
);
