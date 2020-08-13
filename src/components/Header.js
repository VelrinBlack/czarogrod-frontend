// react
import React from 'react';

// components
import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <TopBar />
            <Navbar />
        </header>
    );
};

export default Header;
