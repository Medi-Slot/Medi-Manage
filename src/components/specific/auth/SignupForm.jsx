import React, { useState } from "react";
import "./Auth.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase.js";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupSuccess } from "../../../redux/slices/authSlice.js";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userId, setUserId]=useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize Firestore
  const db = getFirestore();

  useEffect(() => {
    // Check for current user and fetch patient data once the user is available
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setError("User not authenticated. Please log in.");
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      await updateProfile(user, { displayName: username });
      await setDoc(doc(db, "Hospitals", user.uid), {
        hospitalName: username,
        location,
        specialty,
        email,
        createdAt: new Date().toISOString()
      });
      dispatch(signupSuccess({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      }));
      toast.success("User successfully created!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error("Signup failed");
    }
  };
  
  

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <label>Hospital name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Specialty: (E.g. Cardiology)</label>
          <input
            type="text"
            name="Specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </div>
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
          <p>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>
        <div className="form-control checkbox-container">
          <input type="checkbox" name="agree" id="agree" />
          <label>
            By creating an account, you agree to our
            <span> Terms of use</span> and <span>Privacy Policy</span>
          </label>
        </div>
        <input type="submit" value="Create an account" />
      </form>
    </div>
  );
};

export default SignupForm;
