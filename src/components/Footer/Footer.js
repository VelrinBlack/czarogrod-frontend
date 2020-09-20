import React from 'react';

import Link from 'next/link';

import { StyledContainer } from './FooterStyles';

const Footer = () => {
  return (
    <StyledContainer>
      <div className='container'>

        <div className='box-container'>
          <div className='logo-box box'>
            <img src='/images/other/logo.png' alt='logo' className='logo' />
          </div>
        </div>
        <div className='box-container'>
          <div className='menu-box box'>
            <Link href='/home'>
              <div className='link'>HOME</div>
            </Link>
            <Link href='/oferta'>
              <div className='link'>OFERTA</div>
            </Link>
            <Link href='/portfolio'>
              <div className='link'>PORTFOLIO</div>
            </Link>
            <Link href='/pytania'>
              <div className='link'>PYTANIA</div>
            </Link>
            <Link href='/blog'>
              <div className='link'>BLOG</div>
            </Link>
            <Link href='/omnie'>
              <div className='link'>O MNIE</div>
            </Link>
            <Link href='/kontakt'>
              <div className='link'>KONTAKT</div>
            </Link>
          </div>
        </div>
        <div className='box-container'>
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
                <a href='mailhref:kontakt@czarogród.pl'>kontakt@czarogród.pl</a>
              </p>
            </div>
            <div className='social-media'>
              <a
                href='https://www.facebook.com/Czarogrodpl-108508777589942'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                <img
                  src='/images/social_media/facebook.svg'
                  alt='facebook logo'
                  className='logo'
                />
              </a>
              <a
                href='https://www.instagram.com/czarogrod.pl/?hl=pl'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                <img
                  src='/images/social_media/instagram.svg'
                  alt='instagram logo'
                  className='logo'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className='copyright'>© 2020 – Bartosz Wleciał</p>
    </StyledContainer>
  );
};

export default Footer;
