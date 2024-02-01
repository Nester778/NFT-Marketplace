import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import img from "./../../img/createAccPage/Img.png";
import userIcon from "./../../img/icon/UserGray.svg";
import envelope from "./../../img/icon/EnvelopeGray.svg";
import lock from "./../../img/icon/LockKeyGray.svg";

import "./createAccPage.css";

export default function CreateAccPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className="createAcc">
            <div className="createAcc__img">
                <img src={img} alt="" />
            </div>
            <div className="createAcc__content-wrapper">
                <div className="createAcc__content">
                    <h2>Create account</h2>
                    <h5>Welcome! enter your details and start creating, collecting and selling NFTs.</h5>
                    <form className="createAcc__form" action="">
                        <div className="createAcc__form-input">
                            <img src={userIcon} alt="" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="createAcc__form-input">
                            <img src={envelope} alt="" />
                            <input type="text" placeholder="Email Address" />
                        </div>
                        <div className="createAcc__form-input">
                            <img src={lock} alt="" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="createAcc__form-input">
                            <img src={lock} alt="" />
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <button className="createAcc__form-btn">
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}