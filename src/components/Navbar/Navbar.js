import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Tab from './Tab';

import logo from '../../images/logo.png';

const MobileNavigation = styled.nav`
    position: absolute;
    top: 20px;
    left: 0;

    width: 100%;
    height: 0;

    z-index: 2;

    img {
        height: 110px;

        margin-top: 100px;
        margin-left: 50%;

        transform: translateX(-50%);
    }

    .hamburger-btn {
        position: absolute;
        left: 50%;
        top: 220px;
        transform: translateX(-50%);

        width: 55px;
        height: 45px;

        background-color: transparent;
        border: none;

        z-index: 5;
        cursor: pointer;
        transition: all 0.3s;

        &:focus {
            outline: none;
        }

        &.hamburger-btn-active {
            position: fixed;
            top: 50px;
            left: 30px;

            @media (max-width: 768px) {
                top: 80px;
            }
            
            div {
                span {
                    background-color: transparent;
                }
                span::before {
                    transform: translateY(0) rotate(45deg);
                }
                span::after {
                    transform: translateY(0) rotate(-45deg);
                }
            }
        }
        div {
            position: absolute;
            top: 50%;
            left: 50%;

            width: 30px;
            height: 20px;

            transform: translate(-50%, -50%);

            span {
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);

                width: 100%;
                height: 3px;

                background-color: black;

                transition: all 0.3s;

                &::before,
                &::after {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height: 3px;

                    background-color: black;
                }

                &::before {
                    transform: translateY(-10px);
                    transition: all 0.3s;
                }
                &::after {
                    transform: translateY(10px);
                    transition: all 0.3s;
                }
            }
        }
    }

    ul {
        position: fixed;
        top: 36px;
        left: 0;
        transform: translateY(-115%);

        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0;
        padding: 0;

        background-color: #fff;

        list-style: none;

        z-index: 2;
        transition: all 0.3s 0.1s ease-in-out;

        &.active {
            transform: translateY(0);

            padding-top: 50px;
        }
        li {
            width: 100%;
            height: 60px;

            text-align: center;

            z-index: 2;
            transition: all 0.3s 0.1s ease-in-out;

            a {
                text-decoration: none;
                color: #000;
            }
        }
    }
`;

const StyledNavbar = styled.nav`

    position: fixed;
    top: 0;

    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 40px;

    background-color: #fff;
    box-shadow: 0 0 10px 1px #f2f2f2;

    z-index: 2;

    .container {
        width: 80%;
        height: 80%;

        display: flex;
        justify-content: space-between;

        a {
            height: 100%;
            img {
                height: 100%;
            }
        }

        @media (max-width: 1280px) {
            width: 90%;
        }

        ul {
            width: 700px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            margin: 0;

            list-style: none;

            @media (max-width: 1280px) {
                width: 600px;
            }
        }
    }
`;

const Navbar = () => {
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState(0);

    const setSize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        setSize();
        window.addEventListener('resize', setSize);
    });

    if (width <= 1024) {
        return (
            <MobileNavigation>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <button
                    onClick={() => {
                        if (active) {
                            setActive(false);
                        } else {
                            setActive(true);
                        }
                    }}
                    className={
                        active
                            ? 'hamburger-btn hamburger-btn-active'
                            : 'hamburger-btn'
                    }
                >
                    <div>
                        <span></span>
                    </div>
                </button>

                <ul className={active ? 'active' : ''}>
                    <Tab path="/" name="HOME" />
                    <Tab path="/oferta" name="OFERTA" />
                    <Tab path="/portfolio" name="PORTFOLIO" />
                    <Tab path="/pytania" name="PYTANIA" />
                    <Tab path="/blog" name="BLOG" />
                    <Tab path="/omnie" name="O MNIE" />
                    <Tab path="/kontakt" name="KONTAKT" />
                </ul>
            </MobileNavigation>
        );
    }

    return (
        <StyledNavbar>
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <ul>
                    <Tab path="/" name="HOME" />
                    <Tab path="/oferta" name="OFERTA" />
                    <Tab path="/portfolio" name="PORTFOLIO" />
                    <Tab path="/pytania" name="PYTANIA" />
                    <Tab path="/blog" name="BLOG" />
                    <Tab path="/omnie" name="O MNIE" />
                    <Tab path="/kontakt" name="KONTAKT" />
                </ul>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
