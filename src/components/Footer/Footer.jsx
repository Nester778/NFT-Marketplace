import logo from "./../../img/icon/Logo.svg";
import discordLogo from "./../../img/icon/DiscordLogo.svg";
import youtubeLogo from "./../../img/icon/YoutubeLogo.svg";
import twitterLogo from "./../../img/icon/TwitterLogo.svg";
import instagramLogo from "./../../img/icon/InstagramLogo.svg";

import { ReactComponent as Envelope } from './../../img/icon/Envelope.svg';

import "./footer.css";

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__marketplace">
                        <img src={logo} alt="" />
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p>Join our community</p>
                        <div className="footer__marketplace-links">
                            <a href="#!">
                                <img src={discordLogo} alt="" />
                            </a>
                            <a href="#!">
                                <img src={youtubeLogo} alt="" />
                            </a>
                            <a href="#!">
                                <img src={twitterLogo} alt="" />
                            </a>
                            <a href="#!">
                                <img src={instagramLogo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__explore">
                        <h5>Explore</h5>
                        <a href="#!"><p>Marketplace</p></a>
                        <a href="#!"><p>Rankings</p></a>
                        <a href="#!"><p>Connect a wallet</p></a>
                    </div>
                    <div className="footer__join">
                        <h5>Join our weekly digest</h5>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <form action="#!">
                            <div className="footer__form-wrapper">
                                <input type="text" placeholder="Enter your email here" />
                                <button>
                                    <Envelope className="footer__form-btn-img" />
                                    <p>Subscribe</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}