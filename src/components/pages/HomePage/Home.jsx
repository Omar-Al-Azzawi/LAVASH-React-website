import React from 'react'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from "./Data";
import HeroSection from '../HeroSection';

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjFour}/>
        </div>
    )
}

export default Home
