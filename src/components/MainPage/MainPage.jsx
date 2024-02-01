import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Categories from "../Categories/Categories";
import Collection from "../Collection/Collection";
import Creators from "../Creators/Creators";
import Discover from "../Discover/Discover";
import Hero from "../Hero/Hero";
import Highlight from "../Highlight/Highlight";
import HowItWorks from "../HowItWorks/HowItWorks";
import Join from "../Join/Join";


export default function MainPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <main>
            <Hero />
            <Collection />
            <Creators />
            <Categories />
            <Discover />
            <Highlight />
            <HowItWorks />
            <Join />
        </main>
    );
}