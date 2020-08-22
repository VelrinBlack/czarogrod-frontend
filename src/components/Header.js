// react
import React from 'react';

// external libraries
import styled from 'styled-components';

// components
import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';


const StyledHeader = styled.header`
    position: sticky;
    top: -20%;

    height: 290px;

    background-color: #fff;
`

const Header = () => (
    <StyledHeader>
        <TopBar />
        <Navbar />
    </StyledHeader>
);

export default Header;
