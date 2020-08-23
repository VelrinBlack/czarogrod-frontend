// react
import React from 'react';

// external libraries
import styled from 'styled-components';

// components
import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';


const StyledHeader = styled.header`
    position: sticky;
    top: -32%;

    height: 310px;

    background-color: #fff;

    z-index: 10;

    @media (max-width: 768px) {
        top: -28%;
    }
`

const Header = () => (
    <StyledHeader>
        <TopBar />
        <Navbar />
    </StyledHeader>
);

export default Header;
