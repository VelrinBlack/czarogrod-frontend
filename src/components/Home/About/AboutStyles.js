import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  justify-content: center;

  margin: 70px auto 0 auto;

  background-color: #f2f2f2;

  @media (max-width: 1024px) {
    height: 1400px;
  }
  @media (max-width: 599px) {
    height: 1700px;
  }

  .container {
    width: 80%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;

      margin: 90px auto;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    .text-container {
      width: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 1280px) {
        width: 45%;
      }
      @media (max-width: 1024px) {
        width: 70%;
        text-align: center;
      }
      @media (max-width: 768px) {
        width: 100%;
        text-align: start;
      }

      h2 {
        margin-bottom: 10px;
        font-size: 50px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }
    }

    .image-container {
      width: 500px;

      display: flex;
      align-items: center;
      justify-content: right;

      @media (max-width: 1400px) {
        width: 400px;
      }
      @media (max-width: 1024px) {
        width: 80%;
      }

      img {
        width: 100%;
        height: 700px;

        z-index: 1;
        box-shadow: 25px 25px 0 0 #399ca1;

        object-fit: cover;

        @media (max-width: 1024px) {
          height: 500px;
          margin-top: 50px;
          box-shadow: 20px 20px 0 0 #399ca1;
        }
        @media (max-width: 599px) {
          margin-top: 0;
          box-shadow: 15px 15px 0 0 #399ca1;
        }
      }
    }
  }
`;
