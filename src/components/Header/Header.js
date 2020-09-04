import React from 'react';

import { StyledContainer } from './HeaderStyles';

import TopBar from '../TopBar/TopBar';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <StyledContainer>
    <TopBar />
    <Navbar />
  </StyledContainer>
);

export default Header;
