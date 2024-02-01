import React, { useState } from 'react';
import copy from 'clipboard-copy';

import bgImg from "./../../img/artistPage/BgImg.jpg";
import Avatar from "./../../img/artistPage/Avatar.svg";
import { ReactComponent as Copy } from './../../img/icon/Copy.svg';
import { ReactComponent as Plus } from './../../img/icon/Plus.svg';
import Globe from "./../../img/icon/Globe.svg";
import DiscordLogo from "./../../img/icon/DiscordLogo.svg";
import YoutubeLogo from "./../../img/icon/YoutubeLogo.svg";
import TwitterLogo from "./../../img/icon/TwitterLogo.svg";
import InstagramLogo from "./../../img/icon/InstagramLogo.svg";

import imgCard1 from "./../../img/discover/card1/img.jpg";
import imgCard2 from "./../../img/discover/card2/img.jpg";
import imgCard3 from "./../../img/discover/card3/img.jpg";

import mainImg from "./../../img/collection/MainImg.png";
import secondaryImg1 from "./../../img/collection/SecondaryImg1.png";
import secondaryImg2 from "./../../img/collection/SecondaryImg2.png";
import avatar from "./../../img/collection/Avatar.png";

import DiscoverCard from "../DiscoverCard/DiscoverCard";
import CollectionCard from "../CollectionCard/CollectionCard";

import "./artistPage.css";

export default function ArtistPage() {
    const longHex = '0xC0E39S9J654DK89K6B79C';

    const shortHex = longHex.substring(0, 6) + "..." + longHex.substring(19, 23);

    const copyToClipboard = () => {
        copy(longHex);
    };

    const [activeTab, setActiveTab] = useState('Created');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const infoCreated = [
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
    ];

    const infoOwned = [
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: Avatar,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
    ];

    const infoCollection = [
        {
            MainImg: mainImg,
            SecondaryImg1: secondaryImg1,
            SecondaryImg2: secondaryImg2,
            Avatar: avatar,
            Title: "DSGN Animals",
            Name: "MrFox",
            Quantity: 1025,
        },
        {
            MainImg: secondaryImg1,
            SecondaryImg1: mainImg,
            SecondaryImg2: secondaryImg2,
            Avatar: avatar,
            Title: "Magic Mushrooms",
            Name: "MrFox",
            Quantity: 1025,
        },
        {
            MainImg: secondaryImg2,
            SecondaryImg1: secondaryImg1,
            SecondaryImg2: mainImg,
            Avatar: avatar,
            Title: "Disco Machines",
            Name: "MrFox",
            Quantity: 1025,
        },
    ];

    const cards = () => {
        switch (activeTab) {
            case 'Created':
                return infoCreated.map(item => (
                    <div className="artistPage__discoverCard-wrapper">
                        <DiscoverCard DiscoverCardInfo={item} />
                    </div>
                ));
            case 'Owned':
                return infoOwned.map(item => (
                    <div className="artistPage__discoverCard-wrapper">
                        <DiscoverCard DiscoverCardInfo={item} />
                    </div>
                ));
            case 'Collection':
                return infoCollection.map(item => (
                    <div className="artistPage__discoverCard-wrapper">
                        <CollectionCard CollectionCardInfo={item} />
                    </div>
                ));
            default:
                return null;
        }
    };

    return (
        <section className="artistPage">
            <div className="artistPage__bgImg">
                <img src={bgImg} alt="" />
                <div className="artistPage__bgImg-gradient"></div>
            </div>
            <div className="container">
                <div className="artistPage__avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="artistPage__name-follow">
                    <h2 className="artistPage__name">Animakid</h2>
                    <div className="artistPage__follow">
                        <div className="artistPage__follow-activeBtn" onClick={copyToClipboard}>
                            <Copy className="artistPage__follow-activeBtn-img" />
                            <p>{shortHex}</p>
                        </div>
                        <a href="#!" className="artistPage__follow-btn" >
                            <Plus className="artistPage__follow-btn-img" />
                            <p>Follow</p>
                        </a>
                    </div>
                </div>
                <div className="artistPage__text-score">
                    <div>
                        <h4>240k+</h4>
                        <h5>Volume</h5>
                    </div>
                    <div>
                        <h4>100k+</h4>
                        <h5>NFTs Sold</h5>
                    </div>
                    <div>
                        <h4>240k+</h4>
                        <h5>Followers</h5>
                    </div>
                </div>
                <div className="artistPage__bio">
                    <h5 className="artistPage__title">Bio</h5>
                    <h5 className="artistPage__bio-content">The internet's friendliest designer kid.</h5>
                </div>
                <div className="artistPage__links">
                    <h5 className="artistPage__title">Links</h5>
                    <div className="artistPage__links-img">
                        <a href="#!">
                            <img src={Globe} alt="" />
                        </a>
                        <a href="#!">
                            <img src={DiscordLogo} alt="" />
                        </a>
                        <a href="#!">
                            <img src={YoutubeLogo} alt="" />
                        </a>
                        <a href="#!">
                            <img src={TwitterLogo} alt="" />
                        </a>
                        <a href="#!">
                            <img src={InstagramLogo} alt="" />
                        </a>

                    </div>
                </div>
            </div>
            <div className="artistPage__line"></div>
            <div className="container">
                <div className="artistPage__categories">
                    <div className={`artistPage__categories-btn ${activeTab === 'Created' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Created')}>
                        <h5>Created</h5>
                        <div className="artistPage__categories-btn-number">
                            <p>{infoCreated.length}</p>
                        </div>
                    </div>
                    <div className={`artistPage__categories-btn ${activeTab === 'Owned' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Owned')}>
                        <h5>Owned</h5>
                        <div className="artistPage__categories-btn-number">
                            <p>{infoOwned.length}</p>
                        </div>
                    </div>
                    <div className={`artistPage__categories-btn ${activeTab === 'Collection' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Collection')}>
                        <h5>Collection</h5>
                        <div className="artistPage__categories-btn-number">
                            <p>{infoCollection.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="artistPage__cards-wrapper">
                <div className="container">
                    <div className="artistPage__cards">
                        {cards()}
                    </div>
                </div>
            </div>

        </section >
    );
}