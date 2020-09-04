import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer } from './TabStyles';

const Tab = (props) => {
  let classes = ['link'];

  try {
    if (props.location.replace('https://czarogrod.pl', '') === props.path)
      classes.push('active');
  } catch (error) {}

  return (
    <StyledContainer>
      <Link to={props.path} className={classes.join(' ')}>
        {props.name}
      </Link>
    </StyledContainer>
  );
};

export default Tab;
