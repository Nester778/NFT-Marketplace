import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import imgCard1 from "./../../img/discover/card1/img.jpg";
import avatarCard1 from "./../../img/discover/card1/avatar.svg";
import imgCard2 from "./../../img/discover/card2/img.jpg";
import avatarCard2 from "./../../img/discover/card2/avatar.svg";
import imgCard3 from "./../../img/discover/card3/img.jpg";
import avatarCard3 from "./../../img/discover/card3/avatar.svg";

import mainImg from "./../../img/collection/MainImg.png";
import secondaryImg1 from "./../../img/collection/SecondaryImg1.png";
import secondaryImg2 from "./../../img/collection/SecondaryImg2.png";
import avatar from "./../../img/collection/Avatar.png";

import DiscoverCard from "../DiscoverCard/DiscoverCard";
import CollectionCard from "../CollectionCard/CollectionCard";

import MagnifyingGlass from "./../../img/icon/MagnifyingGlass.svg";

import "./marketplacePage.css";


export default function MarketplacePage() {

    const [activeTab, setActiveTab] = useState('NFTs');
    const [searchText, setSearchText] = useState('');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const infoNFTs = [
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: avatarCard1,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: avatarCard2,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: avatarCard3,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: avatarCard1,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: avatarCard2,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: avatarCard3,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard1,
            title: "Distant Galaxy",
            avatar: avatarCard1,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard3,
            title: "AstroFiction",
            avatar: avatarCard2,
            name: "Animakid",
            price: "1.63",
            highestBit: "0.33",
        },
        {
            img: imgCard2,
            title: "Life On Edena",
            avatar: avatarCard3,
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

    const filteredInfoNFTs = infoNFTs.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const filteredInfoCollection = infoCollection.filter(item =>
        item.Title.toLowerCase().includes(searchText.toLowerCase())
    );

    const cards = () => {
        switch (activeTab) {
            case 'NFTs':
                return filteredInfoNFTs.map(item => (
                    <div className="marketplacePage__discoverCard-wrapper">
                        <DiscoverCard DiscoverCardInfo={item} />
                    </div>
                ));
            case 'Collections':
                return filteredInfoCollection.map(item => (
                    <div className="marketplacePage__discoverCard-wrapper">
                        <CollectionCard CollectionCardInfo={item} />
                    </div>
                ));
            default:
                return null;
        }
    };

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className="marketplacePage">
            <div className="container">
                <div className="marketplacePage__search">
                    <h2>Browse Marketplace</h2>
                    <h5>Browse through more than 50k NFTs on the NFT Marketplace.</h5>
                    <div className="marketplacePage__search-bar">
                        <input type="text" placeholder="Search your favourite NFTs" value={searchText}
                            onChange={handleSearchInputChange} />
                        <img src={MagnifyingGlass} alt="" />
                    </div>
                </div>
            </div>
            <div className="marketplacePage__border"></div>
            <div className="container">
                <div className="marketplacePage__categories">
                    <div className={`marketplacePage__categories-btn ${activeTab === 'NFTs' ? 'active' : ''}`}
                        onClick={() => handleTabClick('NFTs')}>
                        <h5>NFTs</h5>
                        <div className="marketplacePage__categories-btn-number">
                            <p>{filteredInfoNFTs.length}</p>
                        </div>
                    </div>
                    <div className={`marketplacePage__categories-btn ${activeTab === 'Collections' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Collections')}>
                        <h5>Collections</h5>
                        <div className="marketplacePage__categories-btn-number">
                            <p>{filteredInfoCollection.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="marketplacePage__cards-wrapper">
                <div className="container">
                    <div className="marketplacePage__cards">
                        {cards()}
                    </div>
                </div>
            </div>
        </section>
    );
}