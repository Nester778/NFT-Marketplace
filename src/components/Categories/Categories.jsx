import img1 from "./../../img/categories/art.jpg";
import img2 from "./../../img/categories/collectibles.jpg";
import img3 from "./../../img/categories/music.jpg";
import img4 from "./../../img/categories/photograohy.jpg";
import img5 from "./../../img/categories/video.jpg";
import img6 from "./../../img/categories/utility.jpg";
import img7 from "./../../img/categories/sport.jpg";
import img8 from "./../../img/categories/virtual.jpg";

import "./categories.css";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

export default function Categories() {
    const info = [
        {
            Img: img1,
            Title: "Art",
        },
        {
            Img: img2,
            Title: "Collectibles",
        },
        {
            Img: img3,
            Title: "Music",
        },
        {
            Img: img4,
            Title: "Photographi",
        },
        {
            Img: img5,
            Title: "Video",
        },
        {
            Img: img6,
            Title: "Utility",
        },
        {
            Img: img7,
            Title: "Sport",
        },
        {
            Img: img8,
            Title: "Virtual Worlds",
        },
    ]
    return (
        <div className='container'>
            <section className="categories">
                <h3>Browse Categories</h3>
                <div className="categories__card">
                    {info.map(item => (
                        <CategoriesCard CategoriesCardInfo={item} />
                    ))}
                </div>
            </section>
        </div>
    );
}