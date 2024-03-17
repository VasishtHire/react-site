import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="Navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                Logo
            </Link>
        </div>
    </nav>
    </>  
    )
}

export default Navbar
