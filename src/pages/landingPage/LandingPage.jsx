import React from 'react';
import Navbar from '../../components/specific/landingPage/navbar/Navbar';
import Welcome from '../../components/specific/landingPage/welcome/Welcome';
import Statistics from '../../components/specific/landingPage/statistics/Statistics';
import ChooseUs from '../../components/specific/landingPage/chooseus/ChooseUs';
import Facilities from '../../components/specific/landingPage/facilities/Facilities';
import Trust from '../../components/specific/landingPage/trust/Trust';
import Footer from '../../components/specific/landingPage/footer/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <section id="welcome">
        <Welcome />
      </section>
      <section id="statistics">
        <Statistics />
      </section>
      <section id="chooseus">
        <ChooseUs />
      </section>
      <section id="facilities">
        <Facilities />
      </section>
      <section id="trust">
        <Trust />
      </section>
      <Footer />
    </div>
  );
}
