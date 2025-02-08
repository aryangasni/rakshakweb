import React from 'react';
import Hero from './Hero';
import PlaneSlide from './PlaneSlide';
import Stats from './Stats';
import LabVisit from '../LabVisit';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
          <Hero />
          <LabVisit />
          <PlaneSlide />
          <Stats />
        </>
     );
}

export default HomePage;