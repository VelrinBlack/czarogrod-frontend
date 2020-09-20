import React from 'react';

import { StyledContainer } from './TopBarStyles';

import phone from '../../../../public/images/contact/phone.svg';
import mail from '../../../../public/images/contact/mail.svg';
import facebook from '../../../../public/images/social_media/facebook.svg';
import instagram from '../../../../public/images/social_media/instagram.svg';

const TopBar = () => {
  return (
    <StyledContainer>
      <div className='container'>
        <div className='contact'>
          <div className='contact-phone'>
            <a href='tel:+48784880484'>
              <img src={phone} alt='telefon' className='icon' />
            </a>

            <p className='phone-number'>
              <a href='tel:+48784880484'>+48 784 880 484</a>
            </p>
          </div>

          <div className='contact-mail'>
            <a href='mailto:kontakt@czarogród.pl'>
              <img src={mail} alt='mail' className='icon' />
            </a>

            <p className='mail-address'>
              <a href='mailto:kontakt@czarogród.pl'>kontakt@czarogród.pl</a>
            </p>
          </div>
        </div>

        <div className='social-media'>
          <a
            href='https://www.facebook.com/Czarogrodpl-108508777589942'
            target='_blank'
            rel='noopener noreferrer'
            className='facebook-logo'
          >
            <img src={facebook} alt='facebook' />
          </a>

          <a
            href='https://www.instagram.com/czarogrod.pl/?hl=pl'
            target='_blank'
            rel='noopener noreferrer'
            className='instagram-logo'
          >
            <img src={instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </StyledContainer>
  );
};

export default TopBar;
