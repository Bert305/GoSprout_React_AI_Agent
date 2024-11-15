import React from 'react';
import './Page1.css'; // Import the CSS file
import logo from './GoSprout_logo.jpg'; // Import the logo image

const Page1 = () => {
    return (
        <div className="center-text">
            <h1>Welcome to GoSprout!</h1>
            <img src={logo} alt="GoSprout Logo" className="logo" />
        </div>
    );
}

export default Page1;
