import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const NavBar = () => {

  return (
    <>
    <div className="navbar">
    <div className="navbar-title"> PetPost</div>
    <nav>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
    </div>
    </>
  );
};

export default NavBar;