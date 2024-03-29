import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import useForceUpdate from 'use-force-update';

import { MobileNavigation, DesktopNavigation } from './NavbarStyles';

import Tab from './Tab/Tab';

const Navbar = () => {
  const [aboutActive, setAboutActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [minimalize, setMinimalize] = useState(false);
  const [width, setWidth] = useState(0);

  const forceUpdate = useForceUpdate();

  const router = useRouter();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    window.addEventListener('scroll', checkPosition);

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  const checkPosition = () => {
    if (window.pageYOffset > 300) {
      setMinimalize(true);
      forceUpdate();
    } else {
      setMinimalize(false);
      forceUpdate();
    }

    if (
      window.pageYOffset >= 650 &&
      window.pageYOffset < 1600 &&
      router.pathname === '/'
    ) {
      setAboutActive(true);
      setHomeActive(false);
    } else {
      setAboutActive(false);
      if (router.pathname === '/') setHomeActive(true);
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
          <img src='/images/other/logo.webp' alt='logo' className='logo-img' />
          <img
            src='/images/other/subtitle.webp'
            alt='subtitle'
            className='subtitle-img'
          />
        </a>

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
            <Tab
              path='/'
              name='HOME'
              location={router.pathname}
              home={homeActive}
            />
            <Tab path='/oferta' name='OFERTA' location={router.pathname} />
            <Tab
              path='/portfolio'
              name='PORTFOLIO'
              location={router.pathname}
            />
            <Tab path='/pytania' name='PYTANIA' location={router.pathname} />
            <Tab path='/blog' name='BLOG' location={router.pathname} />
            <Tab
              path='/omnie'
              name='O MNIE'
              location={router.pathname}
              about={aboutActive}
            />
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
          <img src='/images/other/logo.webp' alt='logo' className='logo-img' />
          <img
            src='/images/other/subtitle.webp'
            alt='subtitle'
            className='subtitle-img'
          />
        </a>
        <ul className='navigation' onClick={() => forceUpdate()}>
          <Tab
            path='/'
            name='HOME'
            exact
            location={window.location.href}
            home={homeActive}
          />
          <Tab path='/oferta' name='OFERTA' location={window.location.href} />
          <Tab
            path='/portfolio'
            name='PORTFOLIO'
            location={window.location.href}
          />
          <Tab path='/pytania' name='PYTANIA' location={window.location.href} />
          <Tab path='/blog' name='BLOG' location={window.location.href} />
          <Tab
            path='/omnie'
            name='O MNIE'
            location={window.location.href}
            about={aboutActive}
          />
          <Tab path='/kontakt' name='KONTAKT' location={window.location.href} />
        </ul>
      </div>
    </DesktopNavigation>
  );
};

export default Navbar;
