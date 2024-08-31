import React from "react";
import Navbar from "../../components/specific/landingPage/Navbar/Navbar";
import Welcome from "../../components/specific/landingPage/welcome/Welcome";
import Statistics from "../../components/specific/landingPage/statistics/Statistics";


export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Statistics />
    </div>
  );
}
