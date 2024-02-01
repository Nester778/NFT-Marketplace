import img from "./../../img/highlight/img.jpg";
import { ReactComponent as Eye } from './../../img/icon/Eye.svg';
import { ReactComponent as Avatar } from './../../img/highlight/avatar.svg';
import { Link } from 'react-router-dom';

import "./highlight.css";
import Timer from '../Timer/Timer';

export default function Highlight() {
    const endDate = new Date(2026, 10, 10, 10, 0, 0);
    return (
        <section className="highlight">
            <div className="highlight__bg">
                <img src={img} alt="" />
                <div className="highlight__gradient">
                </div>
            </div>
            <div className="highlight__content-wrapper">
                <div className="container">
                    <div className="highlight__content">
                        <div className="highlight__content-left">
                            <Link to="/artist" className="highlight__creator">
                                <Avatar className="highlight__creator-img" />
                                <p>Shroomie</p>
                            </Link>
                            <h2>Magic Mashrooms</h2>
                            <Link to="/nft" className="highlight__btn">
                                <Eye className="highlight__btn-img" />
                                <p>See NFT</p>
                            </Link>
                        </div>
                        <div className="highlight__content-right">
                            <Timer endDate={endDate} btn={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};