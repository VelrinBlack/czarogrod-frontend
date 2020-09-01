import React from 'react';

import styled from 'styled-components';

import leaf from '../../images/other/leaf.svg';

const StyledQuestion = styled.div`
  width: 100%;

  * {
    margin: 0;
  }

  h2 {
    margin-bottom: 15px;
  }

  img {
    position: relative;
    right: 15px;

    width: 80px;

    margin: 40px 0 40px 0;
  }
`;

const Question = (props) => {
  return (
    <StyledQuestion>
      <h2>{props.question}</h2>
      <p>{props.anwser}</p>
      {props.leaf ? <img src={leaf} alt='liść' /> : null}
    </StyledQuestion>
  );
};

export default Question;
