import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin-top: 50px;

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }

  .title {
    width: 50%;
    margin: 50px auto;

    font-size: 50px;

    @media (max-width: 1920px) {
      width: 60%;
      font-size: 40px;
    }

    @media (max-width: 1024px) {
      width: 70%;
      font-size: 30px;
    }

    @media (max-width: 786px) {
      width: 90%;
    }
  }

  .txt {
    width: 50%;
    margin: 0 auto;
    font-size: 20px;

    @media (max-width: 1920px) {
      width: 60%;
      font-size: 18px;
    }

    @media (max-width: 1024px) {
      width: 70%;
      font-size: 16px;
    }

    @media (max-width: 786px) {
      width: 90%;
    }

    img {
      width: 100%;
      margin: 40px 0;
    }
  }
`;
