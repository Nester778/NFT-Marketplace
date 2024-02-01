import { Link } from 'react-router-dom';
import "./discoverCard.css";

export default function DiscoverCard(prop) {

    return (
        <Link to="/nft" className="discoverCard">
            <div className="discoverCard__img">
                <img src={prop.DiscoverCardInfo.img} alt="" />
            </div>
            <div className="discoverCard__text">
                <div className="discoverCard__title">
                    <h5>{prop.DiscoverCardInfo.title}</h5>
                </div>
                <Link to="/artist" className="discoverCard__artist">
                    <img src={prop.DiscoverCardInfo.avatar} alt="" />
                    <p>{prop.DiscoverCardInfo.name}</p>
                </Link>
                <div className="discoverCard__cost">
                    <div className="discoverCard__price">
                        <p className="discoverCard__price-smallP">Price</p>
                        <p className="discoverCard__price-bigP">{prop.DiscoverCardInfo.price} ETH</p>
                    </div>
                    <div className="discoverCard__highestBit">
                        <p className="discoverCard__highestBit-smallP">Highest Bid</p>
                        <p className="discoverCard__highestBit-bigP">{prop.DiscoverCardInfo.highestBit} wETH</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}