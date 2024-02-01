import { ReactComponent as Envelope } from './../../img/icon/Envelope.svg';
import Img from "./../../img/join/img.jpg";
import "./join.css";

export default function Join() {
    return (
        <div className="container">
            <section className="join">
                <div className="join__img-wrapper">
                    <img src={Img} alt="" />
                </div>
                <div className="join__title">
                    <h3>Join our weekly digest</h3>
                    <h5>Get exclusive promotions & updates straight to your inbox.</h5>
                    <form action="#!">
                        <div className="join__form-wrapper">
                            <input type="text" placeholder="Enter your email here" />
                            <button>
                                <Envelope className="join__form-btn-img" />
                                <p>Subscribe</p>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}