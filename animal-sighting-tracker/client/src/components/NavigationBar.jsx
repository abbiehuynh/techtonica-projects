import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './NavigationBar.css';
import ListSpecies from './ListSpecies';
import ListSightings from './ListSightings';


const NavigationBar = () => {
  return (
    <>
    <div className="navbar">
    <div className="navbar-title"> Abbie's Animal Sighting Tracker</div>
    <Router>

        <nav>
          <ul className="navbar-links">
            <li>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
                <Link to="/species">Species Tracking</Link>
            </li>
            <li>
                <Link to="/species/sightings">Sightings Tracker</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            {/* <Route path="/" /> */}
            <Route path="/species" element={<ListSpecies />} />
            <Route path="/species/sightings" element={<ListSightings />} />
        </Routes>

      </Router>
      </div>
      </>
  )
}

export default NavigationBar;