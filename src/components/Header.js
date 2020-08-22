// react
import React from 'react';

// external libraries
import styled from 'styled-components';

// components
import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';


const StyledHeader = styled.header`
    position: sticky;
    top: -21.5%;

    height: 320px;

    background-color: #fff;

    z-index: 10;
`

const Header = () => (
    <StyledHeader>
        <TopBar />
        <Navbar />
    </StyledHeader>
);

export default Header;
