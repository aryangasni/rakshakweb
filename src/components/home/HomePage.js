import React from 'react';
import Hero from './Hero';
import PlaneSlide from './PlaneSlide';
import Stats from './Stats';
import LabVisit from '../LabVisit';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
import ThemeSwitcher from "../ThemeSwitcher";

function HomePage() {
    return ( 
        <>
          <Hero />
          <LabVisit />
          <PlaneSlide />
          <Stats />
          <ThemeSwitcher />
        </>
     );
}

export default HomePage;