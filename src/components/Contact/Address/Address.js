import StyledContainer from "./AddressStyles";

const Address = () => (
  <StyledContainer>
    <section className="textData">
      <h2>CzarOgród.pl</h2>
      <p className="name">Agnieszka Lizończyk</p>

      <p>Bolesława Prusa 25a</p>
      <p>32-566 Alwernia</p>
    </section>
    <section className="map">
      <iframe
        loading="lazy"
        allowfullscreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=CzarOgród.pl+projektowanie+ogrodów`}
      ></iframe>
    </section>
  </StyledContainer>
);

export default Address;
