import StyledContainer from "./AddressStyles";

const Address = () => (
  <StyledContainer>
    <section className="textData">
      <h2>CzarOgród.pl</h2>
      <p className="name">Agnieszka Lizończyk</p>

      <p>ul. Prusa 25a</p>
      <p>32-566 Alwernia</p>

      <p className="phoneNumber">+48 784 880 484</p>
      <p>kontakt@czarogrod.pl</p>
    </section>
    <section className="map">
      <iframe
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=CzarOgród.pl+projektowanie+ogrodów`}
      ></iframe>
    </section>
  </StyledContainer>
);

export default Address;
