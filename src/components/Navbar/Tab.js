import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTab = styled.li`
    .link {
        position: relative;

        font-size: 16px;
        color: #000;
        text-decoration: none;
        letter-spacing: 2px;

        transition: all 0.3s;

        @media (max-width: 1280px) {
            font-size: 14px;
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
    return (
        <StyledTab>
            <Link className="link" to={props.path}>
                {props.name}
            </Link>
        </StyledTab>
    );
};

export default Tab;
