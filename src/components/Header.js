import React from 'react';

import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <>
            <header>
                <TopBar />
                <Navbar />
            </header>
        </>
    );
};

export default Header;
