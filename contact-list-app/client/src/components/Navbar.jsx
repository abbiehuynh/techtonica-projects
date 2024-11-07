import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <nav className="navbar" data-test="navbar">
    <h1 className="navbar-title" data-test="navbar-header">Abbie's Contacts</h1>
        <ul className="navbar-links">
            <li>
                <Link to="/home" data-test="home-link">Home</Link>
            </li>
            <li>
                <Link to="/contacts" data-test="contact-link">Contacts</Link>
            </li>
        </ul>
    </nav>
    </>
);
};

export default NavBar;