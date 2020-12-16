import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { StyledContainer } from './TabStyles';

const Tab = (props) => {
  let classes = ['link'];

  try {
    if (props.location.replace('https://czarogrod.pl', '') === props.path && props.path !== '/') {
      classes.push('active');
    }

    if (props.path === '/omnie' && props.about) {
      classes.push('active');
    }

    if (props.path === '/' && props.home) {
      classes.push('active');
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <StyledContainer>
      {props.path === '/omnie' ? (
        <a className={classes.join(' ')} href={'/#omnie'}>
          {props.name}
        </a>
      ) : (
        <a className={classes.join(' ')} href={props.path}>
          {props.name}
        </a>
      )}
    </StyledContainer>
  );
};

Tab.propTypes = {
  location: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string,
};

export default Tab;
