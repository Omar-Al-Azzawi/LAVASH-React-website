import React from 'react'
import {homeObjOne} from "./Data";
import HeroSection from '../HeroSection';
import Pricing from '../../Pricing';

function Services() {
    return (
        <div>
            <Pricing />
            <HeroSection {...homeObjOne}/>
        </div>
    )
}

export default Services
