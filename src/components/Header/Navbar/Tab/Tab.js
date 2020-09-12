import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledContainer } from './TabStyles';

const Tab = (props) => {
  let classes = ['link'];

  try {
    if (props.location.replace('http://localhost:3001', '') === props.path) {
      classes.push('active');
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <StyledContainer>
      <Link to={props.path} className={classes.join(' ')}>
        {props.name}
      </Link>
    </StyledContainer>
  );
};

Tab.propTypes = {
  location: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string,
};

export default Tab;
