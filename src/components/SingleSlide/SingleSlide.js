import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer } from './SingleSlideStyles';

const SingleSlide = ({ text, location, image }) => (
  <StyledContainer image={image}>
    <Link to={location} className='slide'>
      <h2>{text}</h2>
    </Link>
  </StyledContainer>
);

export default SingleSlide;
