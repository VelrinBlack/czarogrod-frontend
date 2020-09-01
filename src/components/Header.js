import React from 'react';

import styled from 'styled-components';

import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';

const StyledHeader = styled.header`
  position: sticky;
  top: -220px;

  height: 310px;

  background-color: #fff;

  z-index: 10;

  @media (max-width: 768px) {
    top: -190px;
  }
`;

const Header = () => (
  <StyledHeader>
    <TopBar />
    <Navbar />
  </StyledHeader>
);

export default Header;
