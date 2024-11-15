import React from 'react';
import './Page3.css'; // Import the CSS file
import logo from './GoSprout_logo.jpg'; // Import the logo image

const Page3 = () => {
    return (
        <div className="center-text">
            <h1>About Us</h1>
            <img src={logo} alt="GoSprout Logo" className="logo" />
        </div>
    );
}

export default Page3;