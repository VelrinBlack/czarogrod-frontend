import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './StyledCard';

const Card = (props) => {
  return (
    <StyledContainer>
      <img src={props.src} alt={props.alt} />
      <p>{props.text}</p>
    </StyledContainer>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
