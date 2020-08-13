// react
import React from 'react';

// external packages
import styled from 'styled-components';

// images
import leaf from '../../images/other/leaf.svg';


const StyledQuestion = styled.div`
    width: 100%;
    margin: 30px 0;

    h2 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 60px;
    }
`;

const Question = props => {
    return (
        <StyledQuestion>
            <h2>{props.question}</h2>
            <p>{props.anwser}</p>
            {props.leaf ? <img src={leaf} alt="liść" /> : null}
        </StyledQuestion>
    );
};

export default Question;
