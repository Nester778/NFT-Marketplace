import { Link } from 'react-router-dom';
import "./rankingsPageCard.css";

export default function RankingsPageCard(prop) {
    return (
        <Link className="rankingsPageCard" to="/artist">
            <div className="rankingsPageCard__artist-wrapper">
                <div className="rankingsPageCard__number">
                    <p>{prop.RankingsPageCardInfo.Number}</p>
                </div>
                <img src={prop.RankingsPageCardInfo.Avatar} alt="" />
                <h5>{prop.RankingsPageCardInfo.Name.length > 12 ? prop.RankingsPageCardInfo.Name.slice(0, 12) + "..." : prop.RankingsPageCardInfo.Name}</h5>
            </div>
            <div className="rankingsPageCard__content">
                <div className="rankingsPageCard__content-change collapse-change">
                    <p>+{prop.RankingsPageCardInfo.Change}%</p>
                </div>
                <div className="rankingsPageCard__content-sold collapse-sold">
                    <p>{prop.RankingsPageCardInfo.Sold}</p>
                </div>
                <div className="rankingsPageCard__content-volume">
                    <p>{prop.RankingsPageCardInfo.Volume} ETH</p>
                </div>
            </div>
        </Link>
    );
}