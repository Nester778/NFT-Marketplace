import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CreatorsCard from "../CreatorsCard/CreatorsCard";
import { ReactComponent as Rocket } from './../../img/icon/Rocket.svg';

import creator1 from "./../../img/creators/Avatar1.jpg";
import creator2 from "./../../img/creators/Avatar2.jpg";
import creator3 from "./../../img/creators/Avatar3.jpg";
import creator4 from "./../../img/creators/Avatar4.jpg";
import creator5 from "./../../img/creators/Avatar5.jpg";
import creator6 from "./../../img/creators/Avatar6.jpg";
import creator7 from "./../../img/creators/Avatar7.jpg";
import creator8 from "./../../img/creators/Avatar8.jpg";
import creator9 from "./../../img/creators/Avatar9.jpg";
import creator10 from "./../../img/creators/Avatar10.jpg";
import creator11 from "./../../img/creators/Avatar11.jpg";
import creator12 from "./../../img/creators/Avatar12.jpg";


import "./creators.css";

export default function Creators() {
    const [visibleCreators, setVisibleCreators] = useState(12);

    const handleResize = () => {
        if (window.innerWidth <= 834 && window.innerWidth > 475) {
            setVisibleCreators(6);
        } else {
            if (window.innerWidth <= 475) {
                setVisibleCreators(5);
            } else {
                setVisibleCreators(12);
            }
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const info = [
        {
            img: creator1,
            name: "Keepitreal",
            sales: "34.53",
            number: 1,
        },
        {
            img: creator2,
            name: "DigiLab",
            sales: "34.53",
            number: 2,
        },
        {
            img: creator3,
            name: "GravityOne",
            sales: "34.53",
            number: 3,
        },
        {
            img: creator4,
            name: "Juanie",
            sales: "34.53",
            number: 4,
        },
        {
            img: creator5,
            name: "BlueWhale",
            sales: "34.53",
            number: 5,
        },
        {
            img: creator6,
            name: "mr fox",
            sales: "34.53",
            number: 6,
        },
        {
            img: creator7,
            name: "Shroomie",
            sales: "34.53",
            number: 7,
        },
        {
            img: creator8,
            name: "robotica",
            sales: "34.53",
            number: 8,
        },
        {
            img: creator9,
            name: "RustyRobot",
            sales: "34.53",
            number: 9,
        },
        {
            img: creator10,
            name: "animakid",
            sales: "34.53",
            number: 10,
        },
        {
            img: creator11,
            name: "Dotgu",
            sales: "34.53",
            number: 11,
        },
        {
            img: creator12,
            name: "Ghiblier",
            sales: "34.53",
            number: 12,
        },
    ]

    return (
        <div className='container'>
            <section className="creator">
                <div className="creator__title">
                    <div className="creator__title-text">
                        <h3>Top Creators</h3>
                        <h5>Checkout Top Rated Creators on the NFT Marketplace</h5>
                    </div>
                    <Link to="/rankings" className="creator__title-btn">
                        <Rocket className="creator__title-btn-img" />
                        <p>View Rankings</p>
                    </Link>
                </div>
                <div className="creator__card">
                    {info.slice(0, visibleCreators).map((item) => (
                        <CreatorsCard CreatorsCardInfo={item} />
                    ))}
                </div>
            </section>
        </div>
    );
}