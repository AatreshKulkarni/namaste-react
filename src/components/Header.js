import { LOGO_URL } from "../utils/constants"

const Header = () => {
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
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
             </div>

        </div>
    )
}

export default Header;