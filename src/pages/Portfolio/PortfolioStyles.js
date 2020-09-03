import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-bottom: 100px;

    text-align: center;
    font-size: 50px;
  }

  .cardsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 100px;

    .loading {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
      grid-row-gap: 80px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 40px;
    }
  }
`;
