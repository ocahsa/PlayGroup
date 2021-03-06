import "./Footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="get-started">
                    <h2> Create your own PlayGroup.</h2>
                    <NavLink to="groups/new">Get Started</NavLink>
                </div>


                <div className="account-list">
                    <h3>Your Account</h3>
                    <ul>
                        <li>Sign up</li>
                        <li>Log in</li>
                    </ul>
                </div>

                <div className="discover-list">
                    <h3>Discover</h3>
                    <ul>
                        <li><NavLink to="/groups">Groups</NavLink></li>
                        <li><NavLink to="/events">Events</NavLink></li>

                    </ul>
                </div>

                <div className="about-list">
                    <h3>PlayGroup</h3>
                    <ul>
                        <li>About</li>
                        <li>Made by Ismail N Manjlai</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;