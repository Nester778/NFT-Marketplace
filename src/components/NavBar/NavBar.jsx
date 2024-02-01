import { useState } from "react";
import { ReactComponent as User } from './../../img/icon/User.svg';
import { Link } from 'react-router-dom';

import logo from "./../../img/icon/Logo.svg";
import burgerMenu from "./../../img/icon/BurgerMenu.svg";

import "./navBar.css";

export default function NavBar() {
    const [toggel, setToggel] = useState(false);
    function clickToggel() {
        if (toggel) {
            setToggel(false);
        }
        else {
            setToggel(true);
        }
    }

    return (
        <section className="navBar">
            <div className="navBar__wrapper">
                <div className="navBar__img-wrapper">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navBar__item-burger" onClick={clickToggel}>
                    <img src={burgerMenu} alt="" />
                </div>
                <div className="navBar__item collapse">
                    <Link to="/marketplace" className="navBar__item-link">
                        Marketplace
                    </Link>
                    <Link to="/rankings" className="navBar__item-link">
                        Rankings
                    </Link>
                    <Link to="/connect-wallet" className="navBar__item-link">
                        Connect a wallet
                    </Link>
                    <Link to="/create-acc" className="navBar__item-btn">
                        <User className="navBar__item-btn-img" />
                        <p>Sign Up</p>
                    </Link>
                </div>
            </div>
            <div className="navBar__item-wrapper uncollapse">
                <div className={`navBar__item ${toggel ? "show" : "unshow"}`}>
                    <Link to="/marketplace" className="navBar__item-link">
                        Marketplace
                    </Link>
                    <Link to="/rankings" className="navBar__item-link">
                        Rankings
                    </Link>
                    <Link to="/connect-wallet" className="navBar__item-link">
                        Connect a wallet
                    </Link>
                    <Link to="/create-acc" className="navBar__item-btn">
                        <User className="navBar__item-btn-img" />
                        <p>Sign Up</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}