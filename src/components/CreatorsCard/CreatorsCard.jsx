import { Link } from 'react-router-dom';
import "./creatorsCard.css";

export default function CreatorsCard(prop) {
    console.log(prop);
    return (
        <Link className="creatorsCard" to="/artist">
            <div className="creatorsCard__number">
                <p>{prop.CreatorsCardInfo.number}</p>
            </div>
            <div className="creatorsCard__content-wrapper">
                <div className="creatorsCard__img-wrapper">
                    <img src={prop.CreatorsCardInfo.img} alt="" />
                </div>
                <div>
                    <h5>{prop.CreatorsCardInfo.name}</h5>
                    <p><span>Total Sales:</span> {prop.CreatorsCardInfo.sales} ETH</p>
                </div>
            </div>
        </Link>
    );
}