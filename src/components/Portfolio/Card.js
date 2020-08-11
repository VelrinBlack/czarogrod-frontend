// react
import React from 'react';
import PropTypes from 'prop-types';

// external packages
import styled from 'styled-components';


const StyledCard = styled.div`
    img {
        width: 100%;
        height: 400px;
        
        object-fit: cover;
    }

    p {
        font-size: 16px;

        @media (max-width: 1280px) {
            font-size: 14px;
        }
        @media (max-width: 768px) {
            font-size: 16px;
        }
        @media (max-width: 425px) {
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

Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string
}

export default Card;
