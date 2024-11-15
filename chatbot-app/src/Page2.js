import React from 'react';
import './Page2.css'; // Import the CSS file
import logo from './GoSprout_logo.jpg'; // Import the logo image

const Page2 = () => {
    return (
        <div className="center-text">
            <h1>Why Apprenticeships?!</h1>
            <img src={logo} alt="GoSprout Logo" className="logo" />
        </div>
    );
}

export default Page2;