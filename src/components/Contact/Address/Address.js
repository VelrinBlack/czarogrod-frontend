import StyledContainer from './AddressStyles';

const Address = () => (
  <StyledContainer>
    <section className='textData'>
      <h2>CzarOgród.pl</h2>
      <p className='name'>Agnieszka Lizończyk</p>

      <p>ul. Prusa 25a</p>
      <p>32-566 Alwernia</p>

      <a
        className='phoneNumber'
        href='tel:+48784880484'
        onClick={() =>
          gtag('event', 'telefon', {
            'event_category': 'kontakt',
            'event_label': '+48784880484 ',
          })
        }
      >
        +48 784 880 484
      </a>
      <a href='mailto:kontakt@czarogrod.pl'>kontakt@czarogrod.pl</a>
    </section>
    <section className='map'>
      <iframe
        loading='lazy'
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=CzarOgród.pl+projektowanie+ogrodów`}
      ></iframe>
    </section>
  </StyledContainer>
);

export default Address;
