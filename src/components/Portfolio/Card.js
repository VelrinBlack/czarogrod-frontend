import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    img {
        width: 100%;
    }
    p {
        font-size: 16px;

        @media (max-width: 1280px) {
            font-size: 14px;
        }
        @media (max-width: 768px) {
            font-size: 16px;
        }
        @media (max-width: 414px) {
            font-size: 14px;
            text-align: center;
        }
    }
`;

const Card = (props) => {
    return (
        <StyledCard>
            <img src={props.src} alt={props.alt} />
            <p>{props.text}</p>
        </StyledCard>
    );
};

export default Card;
