import './Navbar.css';

import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar(){
    return (
        <header id="main-navbar">
            <div className="navbar-content">
                <Link to="/" id="active">
                    <img src={logo} alt="Moodar "/>
                </Link>
                <Link to="/insert">
                    <h2>Inserir</h2>
                </Link>
            </div>
        </header>
    );
}