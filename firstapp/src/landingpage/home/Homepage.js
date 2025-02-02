import React from 'react'
import Hero from './Hero'
import OpenAccount from '../OpenAccount'
import Pricing from './Pricing'
import Stats from './Stats'
import Awards from './Awards'
import Education from './Education'
import Navbar from "../Navbar"
import Footer from "../Footer"

function Homepage() {
    return ( <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
    </> );
}

export default Homepage;
