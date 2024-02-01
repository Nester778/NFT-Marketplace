import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ConnectWalletBtn from "../ConnectWalletBtn/ConnectWalletBtn";
import Metamask from "./../../img/icon/metamask.svg";
import WalletConn from "./../../img/icon/WalletConnect.svg";
import Coinbase from "./../../img/icon/Coinbase.svg";
import img from "./../../img/connectWallet/Img.png";

import "./connectWalletPage.css";

export default function ConnectWalletPage() {
    const info = [
        {
            img: Metamask,
            name: "Metamask",
        },
        {
            img: WalletConn,
            name: "Wallet Connect",
        },
        {
            img: Coinbase,
            name: "Coinbase",
        },
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className="connectWallet">
            <div className="connectWallet__img">
                <img src={img} alt="" />
            </div>
            <div className="connectWallet__content-wrapper">
                <div className="connectWallet__content">
                    <h2>Connect wallet</h2>
                    <h5 className="connectWallet__content-h5">Choose a wallet you want to connect. There are several wallet providers.</h5>
                    <div className="connectWallet__btn-wrapper">
                        {info.map(item => (
                            <ConnectWalletBtn infoConn={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}