import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import useForceUpdate from 'use-force-update';
import { useWindowWidth } from '@react-hook/window-size';

import { MobileNavigation, DesktopNavigation } from './NavbarStyles';

import Tab from './Tab/Tab';

import logo from '../../../../public/images/other/logo.png';
import subtitle from '../../../../public/images/other/subtitle.png';

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [minimalize, setMinimalize] = useState(false);
  const width = useWindowWidth();

  const forceUpdate = useForceUpdate();

  const router = useRouter();

  useEffect(() => {
    if (width > 1024) window.addEventListener('scroll', checkPosition);
    return () => window.removeEventListener('scroll', checkPosition);
  });

  const checkPosition = () => {
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
        <a
          className='logo-link'
          href={'/'}
          onClick={(e) => {
            e.preventDefault();
            router.push('/');
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img src={logo} alt='logo' className='logo-img' />
          <img src={subtitle} alt='subtitle' className='subtitle-img' />
        </a>

        <button
          onClick={
            hamburgerActive
              ? () => setHamburgerActive(false)
              : () => setHamburgerActive(true)
          }
          className={
            hamburgerActive ? 'hamburger-btn hamburger-btn-active' : 'hamburger-btn'
          }
        >
          <div>
            <span></span>
          </div>
        </button>

        <nav onClick={() => setHamburgerActive(false)}>
          <ul className={hamburgerActive ? 'navigation active' : 'navigation'}>
            <Tab path='/' name='HOME' location={router.pathname} />
            <Tab path='/oferta' name='OFERTA' location={router.pathname} />
            <Tab path='/portfolio' name='PORTFOLIO' location={router.pathname} />
            <Tab path='/pytania' name='PYTANIA' location={router.pathname} />
            <Tab path='/blog' name='BLOG' location={router.pathname} />
            <Tab path='/omnie' name='O MNIE' location={router.pathname} />
            <Tab path='/kontakt' name='KONTAKT' location={router.pathname} />
          </ul>
        </nav>
      </MobileNavigation>
    );
  }

  return (
    <DesktopNavigation className={minimalize ? 'minimalized' : ''}>
      <div className='container'>
        <a
          className='logo-link'
          href={'/'}
          onClick={(e) => {
            e.preventDefault();
            router.push('/');
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img src={logo} alt='logo' className='logo-img' />
          <img src={subtitle} alt='subtitle' className='subtitle-img' />
        </a>
        <ul className='navigation' onClick={() => forceUpdate()}>
          <Tab path='/' name='HOME' exact location={window.location.href} />
          <Tab path='/oferta' name='OFERTA' location={window.location.href} />
          <Tab path='/portfolio' name='PORTFOLIO' location={window.location.href} />
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
