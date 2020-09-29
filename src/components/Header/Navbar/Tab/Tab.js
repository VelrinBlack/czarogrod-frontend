import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { StyledContainer } from './TabStyles';

const Tab = (props) => {
  let classes = ['link'];

  try {
    if (
      props.location.replace('http://localhost:3000', '') === props.path &&
      props.path !== '/'
    ) {
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
        <a
          className={classes.join(' ')}
          href={'/#omnie'}
          onClick={(e) => {
            e.preventDefault();
            Router.push('/');
            window.scroll({
              top: 700,
              behavior: 'smooth',
            });
          }}
        >
          {props.name}
        </a>
      ) : (
        <a
          className={classes.join(' ')}
          href={props.path}
          onClick={(e) => {
            e.preventDefault();
            Router.push(props.path);
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
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
