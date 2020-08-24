// react
import React from 'react';
import { Link } from 'react-router-dom';

// external libraries
import styled from 'styled-components';


const StyledTab = styled.li`
    .link {
        position: relative;

        color: #000;
        font-size: 16px;
        letter-spacing: 2px;
        text-decoration: none;

        transition: all 0.3s;

        @media (max-width: 1280px) {
            font-size: 14px;
        }

        &.active {
            &::before{
                width: 80%;
                margin-left: 10%;
            }
        }

        &::before {
            content: '';

            position: absolute;
            top: 100%;

            width: 0;
            height: 2px;

            margin-left: calc(50% - 1px);

            background-color: #98dad9;

            transition: all 0.3s;
        }

        &:hover::before {
            width: 100%;
            margin-left: 0;
        }
    }

`;

const Tab = (props) => {

    let classes = ['link'];

    try {
        if (props.location.replace('https://czarogrod.pl', '') === props.path) classes.push('active')
    } catch (error) {}

    return (
        <StyledTab>
            <Link to={props.path} className={classes.join(' ')}>
                {props.name}
            </Link>
        </StyledTab>
    );
};

export default Tab;
