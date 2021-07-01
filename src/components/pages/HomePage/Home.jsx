import React from 'react'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from "./Data";
import HeroSection from '../HeroSection';
import Pricing from '../../Pricing';

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjThree}/>
            <Pricing />
            <HeroSection {...homeObjFour}/>
        </div>
    )
}

export default Home
