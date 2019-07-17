import './Navbar.css';

import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header id="main-navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/" id="active">
            <div className="navbar-image">
              <img src={logo} alt="Moodar" />
            </div>
          </Link>
        </div>
        <div>
          <Link className="navbar__link" to="/insert">
            <h2>Inserir</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}
