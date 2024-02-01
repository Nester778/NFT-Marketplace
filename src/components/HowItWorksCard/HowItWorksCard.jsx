import { Link } from 'react-router-dom';
import "./howItWorksCard.css";

export default function HowItWorksCard(prop) {
    return (
        <Link to="/connect-wallet" className="howItWorksCard">
            <div className="howItWorksCard-img">
                <img src={prop.howInfo.Img} alt="" />
            </div>
            <div>
                <h5>{prop.howInfo.Title}</h5>
                <p>{prop.howInfo.Desc}</p>
            </div>
        </Link>
    );
}