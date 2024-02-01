import { Link } from 'react-router-dom';
import "./categoriesCard.css";

export default function CategoriesCard(prop) {
    return (
        <Link to="/marketplace" className="categoriesCard">
            <div className="categoriesCard__img-wrapper">
                <img src={prop.CategoriesCardInfo.Img} alt="" />
            </div>
            <div className="categoriesCard__title-wrapper">
                <h5>{prop.CategoriesCardInfo.Title}</h5>
            </div>
        </Link>
    );
}