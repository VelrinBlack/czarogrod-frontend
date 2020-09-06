import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForceUpdate from 'use-force-update';

import { MobileNavigation, DesktopNavigation } from './NavbarStyles';

import Tab from './Tab/Tab';

import logo from '../../../images/other/logo.png';
import subtitle from '../../../images/other/subtitle.png';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [minimalize, setMinimalize] = useState(false);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    if (width > 1024) window.addEventListener('scroll', checkPosition);

    return () => window.removeEventListener('scroll', checkPosition);
  });

  const checkPosition = () => {
    if (
      window.location.href === 'http://localhost:3000/omnie' ||
      window.location.href === 'http://localhost:3000/'
    ) {
      forceUpdate();
    }

    if (window.pageYOffset > 300) {
      setMinimalize(true);
      forceUpdate();
    } else {
      setMinimalize(false);
      forceUpdate();
    }
  };

  if (width <= 1024) {
    return (
      <MobileNavigation>
        <Link to='/' className='logo-link'>
          <img src={logo} alt='logo' className='logo-img' />
          <img src={subtitle} alt='subtitle' className='subtitle-img' />
        </Link>

        <button
          onClick={
            hamburgerActive
              ? () => setHamburgerActive(false)
              : () => setHamburgerActive(true)
          }
          className={
            hamburgerActive
              ? 'hamburger-btn hamburger-btn-active'
              : 'hamburger-btn'
          }
        >
          <div>
            <span></span>
          </div>
        </button>

        <nav onClick={() => setHamburgerActive(false)}>
          <ul className={hamburgerActive ? 'navigation active' : 'navigation'}>
            <Tab path='/' name='HOME' location={window.location.pathname} />
            <Tab
              path='/oferta'
              name='OFERTA'
              location={window.location.pathname}
            />
            <Tab
              path='/portfolio'
              name='PORTFOLIO'
              location={window.location.pathname}
            />
            <Tab
              path='/pytania'
              name='PYTANIA'
              location={window.location.pathname}
            />
            <Tab path='/blog' name='BLOG' location={window.location.pathname} />
            <Tab
              path='/omnie'
              name='O MNIE'
              location={window.location.pathname}
            />
            <Tab
              path='/kontakt'
              name='KONTAKT'
              location={window.location.pathname}
            />
          </ul>
        </nav>
      </MobileNavigation>
    );
  }

  return (
    <DesktopNavigation className={minimalize ? 'minimalized' : ''}>
      <div className='container'>
        <Link to='/' className='logo-link'>
          <img src={logo} alt='logo' className='logo-img' />
          <img src={subtitle} alt='subtitle' className='subtitle-img' />
        </Link>
        <ul className='navigation'>
          <Tab path='/' name='HOME' exact location={window.location.href} />
          <Tab path='/oferta' name='OFERTA' location={window.location.href} />
          <Tab
            path='/portfolio'
            name='PORTFOLIO'
            location={window.location.href}
          />
          <Tab path='/pytania' name='PYTANIA' location={window.location.href} />
          <Tab path='/blog' name='BLOG' location={window.location.href} />
          <Tab path='/omnie' name='O MNIE' location={window.location.href} />
          <Tab path='/kontakt' name='KONTAKT' location={window.location.href} />
        </ul>
      </div>
    </DesktopNavigation>
  );
};

export default Navbar;
