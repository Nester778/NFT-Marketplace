import HowItWorksCard from "../HowItWorksCard/HowItWorksCard";
import img1 from "./../../img/howItWorks/img1.png";
import img2 from "./../../img/howItWorks/img2.png";
import img3 from "./../../img/howItWorks/img3.png";

import "./howItWorks.css";

export default function HowItWorks() {

    const howInfo = [
        {
            Img: img1,
            Title: "Setup Your wallet",
            Desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the " +
                "wallet icon in the top right corner.",
        },
        {
            Img: img2,
            Title: "Create Collection",
            Desc: "Upload your work and setup your collection. Add a " +
                "description, social links and floor price.",
        },
        {
            Img: img3,
            Title: "Start Earning",
            Desc: "Choose between auctions and fixed-price listings. Start earning " +
                "by selling your NFTs or trading others.",
        },
    ]

    return (
        <section className="howItWorks">
            <div className="container">
                <div className="howItWorks__text">
                    <h3>How it works</h3>
                    <h5>Find out how to get started</h5>
                </div>
                <div className="howItWorks__cards">
                    {howInfo.map(item => (<HowItWorksCard howInfo={item} />))}
                </div>
            </div>
        </section>
    );
}