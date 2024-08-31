import React, { useState } from "react";
import "./Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase.js";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in");
      toast.success("User Sucessfully Logedin");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to Login")
    }
  };
  return (
    <div className="LoginForm">
      {/* {error && <p className="error">{error}</p>} */}
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label>Email Address :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
