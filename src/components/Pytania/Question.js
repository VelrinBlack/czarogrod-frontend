import React from 'react';
import styled from 'styled-components';

import leaf from '../../images/leaf.svg';

const StyledQuestion = styled.div`
    width: 100%;

    margin: 30px 0;

    * {
        margin: 0;
        padding: 0;
    }

    h2 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 60px;
    }
`;

const Question = (props) => {
    return (
        <>
            <StyledQuestion>
                <h2>{props.question}</h2>
                <p>{props.anwser}</p>
                {props.leaf ? <img src={leaf} alt="leaf" /> : null}
            </StyledQuestion>
        </>
    );
};

export default Question;
