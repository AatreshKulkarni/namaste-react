import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    let [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div>
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="food-app-logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;