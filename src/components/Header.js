import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

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
                        Online Status: {onlineStatus ? "🟢": "🔴"}
                    </li>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact-us">ContactUs</Link>
                    </li>
                    <li>
                        <Link className="link" to="/grocery">Grocery</Link>
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