import { Link } from 'react-router-dom';
import "./collectionCard.css";

export default function CollectionCard(prop) {
    return (
        <Link to="/nft" className="collectionCard">
            <div className="collectionCard__main-img-wrapper">
                <img src={prop.CollectionCardInfo.MainImg} alt="" />
            </div>
            <div className="collectionCard__secondary-imgs">
                <div className="collectionCard__secondary-img-wrapper">
                    <img src={prop.CollectionCardInfo.SecondaryImg1} alt="" />
                </div>
                <div className="collectionCard__secondary-img-wrapper">
                    <img src={prop.CollectionCardInfo.SecondaryImg2} alt="" />
                </div>
                <div className="collectionCard__quantity">
                    {prop.CollectionCardInfo.Quantity}+
                </div>
            </div>
            <h5 className="collectionCard__title">{prop.CollectionCardInfo.Title}</h5>
            <Link to="/artist" className="collectionCard__creator">
                <img src={prop.CollectionCardInfo.Avatar} alt="" />
                <p>{prop.CollectionCardInfo.Name}</p>
            </Link>
        </Link>
    );
}