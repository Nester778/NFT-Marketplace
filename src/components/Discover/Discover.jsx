import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgCard1 from "./../../img/discover/card1/img.jpg";
import avatarCard1 from "./../../img/discover/card1/avatar.svg";
import imgCard2 from "./../../img/discover/card2/img.jpg";
import avatarCard2 from "./../../img/discover/card2/avatar.svg";
import imgCard3 from "./../../img/discover/card3/img.jpg";
import avatarCard3 from "./../../img/discover/card3/avatar.svg";

import { ReactComponent as Eye } from './../../img/icon/Eye.svg';

import "./discover.css";
import DiscoverCard from "../DiscoverCard/DiscoverCard";

export default function Discover() {
    const [visibleDiscover, setVisibleDiscover] = useState(12);

    const handleResize = () => {
        if (window.innerWidth <= 834 && window.innerWidth > 475) {
            setVisibleDiscover(2);
        }
        else {
            if (window.innerWidth <= 475) {
                setVisibleDiscover(3);
            }
            else {
                setVisibleDiscover(3);
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
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: avatarCard1,
            name: "MoonDancer",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: avatarCard2,
            name: "NebulaKid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: avatarCard3,
            name: "Spaceone",
            price: "1.63",
            highestBit: "0.33",
        },
    ]
    return (
        <div className='container'>
            <section className="discover">
                <div className="container">
                    <div className="discover__header">
                        <div className="discover__text">
                            <h3>Discover More NFTs</h3>
                            <h5>Explore new trending NFTs</h5>
                        </div>
                        <Link to="/marketplace" className="discover__btn">
                            <div className="discover__btn-wrapper">
                                <Eye className="discover__btn-img" />
                                <p>See All</p>
                            </div>
                        </Link>
                    </div>
                    <div className="discover__content">
                        {info.slice(0, visibleDiscover).map((item) => (
                            <DiscoverCard DiscoverCardInfo={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}