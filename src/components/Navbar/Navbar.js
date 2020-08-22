// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// external libraries
import styled from 'styled-components';
import useForceUpdate from 'use-force-update';

// components
import Tab from './Tab';

// images
import logo from '../../images/other/logo.png';
import subtitle from '../../images/other/subtitle.png'

const MobileNavigation = styled.nav`
    position: absolute;
    top: 20px;

    width: 100%;

    z-index: 2;

    .logo-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: 60px;

        .logo-img {
            height: 110px;
        }
        .subtitle-img {
            height: 40px;
            margin-top: 10px;
        }
    }
    

    .hamburger-btn {
        position: absolute;
        left: 50%;
        top: 240px;
        transform: translateX(-50%);

        width: 55px;
        height: 45px;

        background-color: transparent;
        border: none;

        z-index: 3;
        cursor: pointer;
        transition: all 0.3s;

        &.hamburger-btn-active {
            position: fixed;
            top: 50px;
            left: 30px;

            @media (max-width: 768px) { top: 80px; }
            
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

        &:focus {
            outline: none;
        }

        
        div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 30px;
            height: 20px;


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

    .navigation {
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

            transition: padding-top .3s;
            
            @media (max-width: 768px) { padding-top: 80px; }
        }

        li {
            width: 100%;
            height: 60px;

            text-align: center;

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
    transition: all .3s;

    &.minimalized {
        height: 100px;

        box-shadow: 0 0 10px 10px #f2f2f2;
        transform: translateY(-40px);
        z-index: 3;
    }

    .container {
        width: 80%;
        height: 80%;

        display: flex;
        justify-content: space-between;

        @media (max-width: 1280px) { width: 90%; }

        .logo-link {
            height: 100%;
            display: flex;
            align-items: center;

            .logo-img {
                height: 100%;
            }
            .subtitle-img {
                height: 35%;
            }
        }

        .navigation {
            width: 700px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            list-style: none;

            @media (max-width: 1280px) { width: 600px; }
        }
    }
`;


const Navbar = props => {
    const [width, setWidth] = useState(window.innerWidth);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [minimalize, setMinimalize] = useState(false)

    const forceUpdate = useForceUpdate()

    useEffect(() => {
        // set 'width' variable on screen resize
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        //
        if (width > 1024) window.addEventListener('scroll', checkPosition)

        return () => window.removeEventListener('scroll', checkPosition)
    });

    const checkPosition = () => {
        // if user is on 'home' or 'omnie'
        if (window.location.href === 'http://localhost:3000/omnie' || window.location.href === 'http://localhost:3000/') {
            forceUpdate()
        }

        if (window.pageYOffset > 300) {
            setMinimalize(true)
            forceUpdate()
        } else {
            setMinimalize(false)
            forceUpdate()
        }
    }


    if (width <= 1024) {
        return (
            <MobileNavigation>
                <Link to='/' className='logo-link'>
                    <img src={logo} alt='logo' className='logo-img'/>
                    <img src={subtitle} alt='subtitle' className='subtitle-img'/>
                </Link>

                <button
                    onClick={hamburgerActive ? () => setHamburgerActive(false) : () => setHamburgerActive(true)}
                    className={hamburgerActive ? 'hamburger-btn hamburger-btn-active' : 'hamburger-btn'}
                >
                    <div>
                        <span></span>
                    </div>
                </button>

                <nav onClick={() => setHamburgerActive(false)}>
                    <ul className={hamburgerActive ? 'navigation active' : 'navigation'}>
                        <Tab path='/' name='HOME' />
                        <Tab path='/oferta' name='OFERTA' />
                        <Tab path='/portfolio' name='PORTFOLIO' />
                        <Tab path='/pytania' name='PYTANIA' />
                        <Tab path='/blog' name='BLOG' />
                        <Tab path='/omnie' name='O MNIE' />
                        <Tab path='/kontakt' name='KONTAKT' />
                    </ul>
                </nav>
            </MobileNavigation>
        );
    }

    return (
        <StyledNavbar className={minimalize ? 'minimalized' : ''}>
            <div className='container'>
                <Link to='/' className='logo-link'>
                    <img src={logo} alt='logo' className='logo-img' />
                    <img src={subtitle} alt='subtitle' className='subtitle-img'/>
                </Link>
                <ul className='navigation'>
                    <Tab path='/' name='HOME' exact location={window.location.href}/>
                    <Tab path='/oferta' name='OFERTA' location={window.location.href}/>
                    <Tab path='/portfolio' name='PORTFOLIO' location={window.location.href}/>
                    <Tab path='/pytania' name='PYTANIA' location={window.location.href}/>
                    <Tab path='/blog' name='BLOG' location={window.location.href}/>
                    <Tab path='/omnie' name='O MNIE' location={window.location.href}/>
                    <Tab path='/kontakt' name='KONTAKT' location={window.location.href}/>
                </ul>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
