import React from "react";
import Navbar from "../../components/specific/landingPage/Navbar/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      LandingPage
      <p>{process.env.REACT_APP_FIREBASE_API_KEY}</p>
    </div>
  );
}
