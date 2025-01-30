import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
          
          <Hero/>
          <OpenAccount/>
          <Brokerage/>
          
        </>
     );
}

export default PricingPage;