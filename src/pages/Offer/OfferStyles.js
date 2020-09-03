import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  h1 {
    text-align: center;
    font-size: 50px;
  }

  h2 {
    font-size: 30px;
    margin-top: 100px;

    @media (max-width: 1024px) {
      font-size: 25px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
