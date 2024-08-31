import React from "react";
import Navbar from "../../components/specific/landingPage/Navbar/Navbar";
import Welcome from "../../components/specific/landingPage/welcome/Welcome";
import Statistics from "../../components/specific/landingPage/statistics/Statistics";
import ChooseUs from "../../components/specific/landingPage/chooseus/ChooseUs";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Statistics />
      <ChooseUs />
    </div>
  );
}
