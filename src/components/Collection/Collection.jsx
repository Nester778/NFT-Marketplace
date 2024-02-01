import React, { useState, useEffect } from 'react';

import mainImg from "./../../img/collection/MainImg.png";
import secondaryImg1 from "./../../img/collection/SecondaryImg1.png";
import secondaryImg2 from "./../../img/collection/SecondaryImg2.png";
import avatar from "./../../img/collection/Avatar.png";

import "./collection.css";
import CollectionCard from "../CollectionCard/CollectionCard";

export default function Collection() {
    const [visibleCollection, setVisibleCollection] = useState(12);

    const handleResize = () => {
        if (window.innerWidth <= 834 && window.innerWidth > 475) {
            setVisibleCollection(2);
        }
        else {
            if (window.innerWidth <= 475) {
                setVisibleCollection(1);
            }
            else {
                setVisibleCollection(3);
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
    return (
        <div className='container'>
            <section className="collection">
                <div className="collection__title">
                    <h3>Trending Collection</h3>
                    <h5>Checkout our weekly updated trending collection.</h5>
                </div>
                <div className="collection__cards">
                    {info.slice(0, visibleCollection).map((item) => (
                        <CollectionCard CollectionCardInfo={item} />
                    ))}
                </div>
            </section>
        </div >
    );
}