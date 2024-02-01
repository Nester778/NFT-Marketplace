import { ReactComponent as Rocket } from './../../img/icon/Rocket.svg';
import { Link } from 'react-router-dom';

import cardImg from "./../../img/hero/Card-Img.jpg";
import avatar from "./../../img/hero/Avatar.jpg";

import "./hero.css";

export default function Hero() {
    return (
        <div className='container'>
            <section className="hero">
                <div className="hero__text">
                    <h1>Discover digital art & Collect NFTs</h1>
                    <h5>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art
                        from more than 20k NFT artists.</h5>
                    <Link to="/create-acc" className="hero__text-btn">
                        <Rocket className="hero__text-btn-img" />
                        <p>Get Started</p>
                    </Link>
                    <ul className="hero__text-score">
                        <li>
                            <h4>240k+</h4>
                            <p>Total Sale</p>
                        </li>
                        <li>
                            <h4>100k+</h4>
                            <p>Auctions</p>
                        </li>
                        <li>
                            <h4>240k+</h4>
                            <p>Artists</p>
                        </li>
                    </ul>
                </div>
                <Link to="/nft" className="hero__card">
                    <div className="hero__card-wrapper">
                        <img src={cardImg} alt="" />
                    </div>
                    <div className="hero__card-text">
                        <h5>Space Walking</h5>
                        <Link to="/artist" className="hero__card-creator">
                            <img src={avatar} alt="" />
                            <p>Animakid</p>
                        </Link>
                    </div>
                </Link>
            </section >
        </div>
    );
}