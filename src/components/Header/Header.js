import React from 'react';

import { StyledContainer } from './HeaderStyles';

import TopBar from './TopBar/TopBar';
import Navbar from './Navbar/Navbar';

const Header = () => (
  <StyledContainer>
    <div className='wrapper'>
      <TopBar />
      <Navbar />
    </div>
  </StyledContainer>
);

export default Header;
