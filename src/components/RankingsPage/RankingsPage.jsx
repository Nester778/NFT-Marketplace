import React, { useState } from 'react';

import avatar1 from "./../../img/rankingsPage/Avatar1.svg";
import avatar2 from "./../../img/rankingsPage/Avatar2.svg";
import avatar3 from "./../../img/rankingsPage/Avatar3.svg";
import avatar4 from "./../../img/rankingsPage/Avatar4.svg";
import avatar5 from "./../../img/rankingsPage/Avatar5.svg";
import avatar6 from "./../../img/rankingsPage/Avatar6.svg";
import avatar7 from "./../../img/rankingsPage/Avatar7.svg";
import avatar8 from "./../../img/rankingsPage/Avatar8.svg";
import avatar9 from "./../../img/rankingsPage/Avatar9.svg";
import avatar10 from "./../../img/rankingsPage/Avatar10.svg";
import avatar11 from "./../../img/rankingsPage/Avatar11.svg";
import avatar12 from "./../../img/rankingsPage/Avatar12.svg";
import avatar13 from "./../../img/rankingsPage/Avatar13.svg";
import avatar14 from "./../../img/rankingsPage/Avatar14.svg";
import avatar15 from "./../../img/rankingsPage/Avatar15.svg";
import avatar16 from "./../../img/rankingsPage/Avatar16.svg";
import avatar17 from "./../../img/rankingsPage/Avatar17.svg";
import avatar18 from "./../../img/rankingsPage/Avatar18.svg";
import avatar19 from "./../../img/rankingsPage/Avatar19.svg";
import avatar20 from "./../../img/rankingsPage/Avatar20.svg";

import "./rankingsPage.css";
import RankingsPageCard from '../RankingsPageCard/RankingsPageCard';

export default function RankingsPage() {

    const [activeTab, setActiveTab] = useState('Today');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const rankingsInfo = [
        {
            Number: 1,
            Avatar: avatar1,
            Name: "Jaydon Ekstrom Bothman",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 2,
            Avatar: avatar2,
            Name: "Ruben Carder",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 3,
            Avatar: avatar3,
            Name: "Alfredo Septimus",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 4,
            Avatar: avatar4,
            Name: "Davis Franci",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 5,
            Avatar: avatar5,
            Name: "Livia Rosser",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 6,
            Avatar: avatar6,
            Name: "Kianna Donin",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 7,
            Avatar: avatar7,
            Name: "Phillip Lipshutz",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 8,
            Avatar: avatar8,
            Name: "Maria Rosser",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 9,
            Avatar: avatar9,
            Name: "Kianna Stanton",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 10,
            Avatar: avatar10,
            Name: "Angel Lubin",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 11,
            Avatar: avatar11,
            Name: "Allison Torff",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 12,
            Avatar: avatar12,
            Name: "Davis Workman",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 13,
            Avatar: avatar13,
            Name: "Lindsey Lipshutz",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 14,
            Avatar: avatar14,
            Name: "Randy Carder",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 15,
            Avatar: avatar15,
            Name: "Lydia Culhane",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 16,
            Avatar: avatar16,
            Name: "Rayna Bator",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 17,
            Avatar: avatar17,
            Name: "Jocelyn Westervelt",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 18,
            Avatar: avatar18,
            Name: "Marilyn Torff",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 19,
            Avatar: avatar19,
            Name: "Skylar Levin",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
        {
            Number: 20,
            Avatar: avatar20,
            Name: "Terry Dorwart",
            Change: 1.41,
            Sold: 602,
            Volume: 12.4,
        },
    ];

    return (
        <section className="rankings">
            <div className="container">
                <div className="rankings__title">
                    <h2>Top Creators</h2>
                    <h5>Check out top ranking NFT artists on the NFT Marketplace.</h5>
                </div>
            </div>
            <div className="marketplacePage__border"></div>
            <div className="container">
                <div className="artistPage__categories">
                    <div className={`artistPage__categories-btn ${activeTab === 'Today' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Today')}>
                        <h5 className='artistPage__categories-btn-long'>Today</h5>
                        <h5 className='artistPage__categories-btn-short'>1d</h5>
                    </div>
                    <div className={`artistPage__categories-btn ${activeTab === 'ThisWeek' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ThisWeek')}>
                        <h5 className='artistPage__categories-btn-long'>This Week</h5>
                        <h5 className='artistPage__categories-btn-short'>7d</h5>
                    </div>
                    <div className={`artistPage__categories-btn ${activeTab === 'ThisMonth' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ThisMonth')}>
                        <h5 className='artistPage__categories-btn-long'>This Month</h5>
                        <h5 className='artistPage__categories-btn-short'>30d</h5>
                    </div>
                    <div className={`artistPage__categories-btn ${activeTab === 'AllTime' ? 'active' : ''}`}
                        onClick={() => handleTabClick('AllTime')}>
                        <h5>All Time</h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="artistPage__rankings-cards">
                    <div className="artistPage__rankings-titles">
                        <div className="artistPage__rankings-titles-left">
                            <p>#</p>
                            <p>Artist</p>
                        </div>
                        <div className="artistPage__rankings-titles-right">
                            <p className='collapse-change'>Change</p>
                            <p className='collapse-sold'>NFTs Sold</p>
                            <p>Volume</p>
                        </div>
                    </div>
                    {rankingsInfo.map(item => (
                        <RankingsPageCard RankingsPageCardInfo={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}