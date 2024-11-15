import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/home" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/apprenticeships" className="navbar-link">Why Apprenticeships</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;