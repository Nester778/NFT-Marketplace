import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import img from "./../../img/nftPage/Img.jpg";
import Timer from '../Timer/Timer';
import avatar from "./../../img/nftPage/Avatar.svg";
import glode from "./../../img/icon/Globe.svg";
import arrowRight from "./../../img/icon/ArrowRight.svg";

import imgCard1 from "./../../img/discover/card1/img.jpg";
import avatarCard1 from "./../../img/discover/card1/avatar.svg";
import imgCard2 from "./../../img/discover/card2/img.jpg";
import avatarCard2 from "./../../img/discover/card2/avatar.svg";
import imgCard3 from "./../../img/discover/card3/img.jpg";
import avatarCard3 from "./../../img/discover/card3/avatar.svg";

import DiscoverCard from "../DiscoverCard/DiscoverCard";

import "./NFTPage.css";

export default function NFTPage() {
    const endDate = new Date(2026, 10, 10, 10, 0, 0);
    const infoNFT = {
        Img: img,
        Title: "The Orbitians",
        Date: "Sep 30, 2022",
        Avatar: avatar,
        Name: "Orbitian",
        Description: "The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain," +
            " There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch" +
            " are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on" +
            " Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for" +
            " many generations. The invaders are called Upside-Downs, because of their inverted bodies that live" +
            " on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to" +
            " win this war if they could only get an eye into Orbitian territory, so they've taken to make human" +
            " beings their target.",
        tags: [
            "Animation",
            "illustration",
            "moon",
        ],
    };
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

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className="NFTPage">
            <dir className="NFTPage__bg-img">
                <img src={infoNFT.Img} alt="" />
            </dir>
            <div className="container">
                <div className="NFTPage__content">
                    <div className="NFTPage__text">
                        <h2 className="NFTPage__title">{infoNFT.Title}</h2>
                        <h5 className="NFTPage__date">Minted on {infoNFT.Date}</h5>
                    </div>
                    <div className="NFTPage__timer">
                        <Timer endDate={endDate} btn={true} />
                    </div>
                </div>
                <div className="NFTPage__content-wrapper">
                    <h5 className="NFTPage__dir">Created By</h5>
                    <div className="NFTPage__artist">
                        <img src={infoNFT.Avatar} alt="" />
                        <h5 className="NFTPage__artist-name">{infoNFT.Name}</h5>
                    </div>
                    <h5 className="NFTPage__dir">Description</h5>
                    <h5 className="NFTPage__desc">{infoNFT.Description}</h5>
                    <div className="NFTPage__details">
                        <h5 className="NFTPage__dir">Details</h5>
                        <div className="NFTPage__link">
                            <img src={glode} alt="" />
                            <h5>View on Etherscan</h5>
                        </div>
                        <div className="NFTPage__link">
                            <img src={glode} alt="" />
                            <h5>View Original</h5>
                        </div>
                    </div>
                </div>
                <h5 className="NFTPage__dir">Tags</h5>
                <div className="NFTPage__tags">
                    {infoNFT.tags.map(item => (
                        <a href="#!" className="NFTPage__tag">
                            <p>{item}</p>
                        </a>
                    ))}
                </div>

                <div className="NFTPage__more-title-wrapper">
                    <div className="NFTPage__more-title">
                        <h3>More from this artist</h3>
                        <a href="#!" className="NFTPage__more-title-btn">
                            <img src={arrowRight} alt="" />
                            <p>Go To Artist Page</p>
                        </a>
                    </div>
                    <div className="NFTPage__cards">
                        {info.map(item => (
                            <DiscoverCard DiscoverCardInfo={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}