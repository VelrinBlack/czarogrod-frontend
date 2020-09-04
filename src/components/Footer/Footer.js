import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer } from './FooterStyles';

import logo from '../../images/other/logo.png';
import facebook from '../../images/social_media/facebook.svg';
import instagram from '../../images/social_media/instagram.svg';

const Footer = () => {
  return (
    <StyledContainer>
      <div className='container'>
        <div className='logo-box box'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='menu-box box'>
          <Link to='/home' className='link'>
            HOME
          </Link>
          <Link to='/oferta' className='link'>
            OFERTA
          </Link>
          <Link to='/portfolio' className='link'>
            PORTFOLIO
          </Link>
          <Link to='/pytania' className='link'>
            PYTANIA
          </Link>
          <Link to='/blog' className='link'>
            BLOG
          </Link>
          <Link to='/omnie' className='link'>
            O MNIE
          </Link>
          <Link to='/kontakt' className='link'>
            KONTAKT
          </Link>
        </div>
        <div className='contact-box box'>
          <p className='text'>
            Skontaktuj się ze mną używając poniższych danych lub wypełnij
            formularz w zakładce KONTAKT, a ja odezwę się do Ciebie.
          </p>
          <div className='contact-data'>
            <p className='phone-number'>
              nr telefonu:
              <br />
              <a href='tel:++48784880484'>+48 784 880 484</a>
            </p>
            <p className='email-address'>
              adres e-mail:
              <br />
              <a href='mailto:kontakt@czarogród.pl'>kontakt@czarogród.pl</a>
            </p>
          </div>
          <div className='social-media'>
            <a
              href='https://www.facebook.com/Czarogrodpl-108508777589942'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <img src={facebook} alt='facebook logo' className='logo' />
            </a>
            <a
              href='https://www.instagram.com/czarogrod.pl/?hl=pl'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <img src={instagram} alt='instagram logo' className='logo' />
            </a>
          </div>
        </div>
      </div>
      <p className='copyright'>© 2020 – Bartosz Wleciał</p>
    </StyledContainer>
  );
};

export default Footer;
