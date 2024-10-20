import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <nav className="navbar">
    <h1 className="navbar-title">Abbie's Contacts</h1>
        <ul className="navbar-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    </nav>
    </>
);
};

export default NavBar;