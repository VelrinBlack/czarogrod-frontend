import styled from 'styled-components';

export const StyledContainer = styled.div`
  .link-wrapper {
    display: flex;

    margin: 50px 0;

    color: #000;
    text-decoration: none;

    cursor: pointer;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .image {
      width: 300px;
      height: 250px;
      object-fit: cover;

      @media (max-width: 1024px) {
        width: 100%;
        height: 250px;
      }
    }

    .text-content-wrapper {
      display: flex;
      flex-direction: column;

      padding-left: 40px;

      @media (max-width: 1024px) {
        padding: 0;
      }

      .title {
        font-size: 25px;

        @media (max-width: 1920px) {
          font-size: 20px;
        }
        @media (max-width: 1280px) {
          font-size: 18px;
        }
      }

      .text {
        font-size: 20px;

        @media (max-width: 1920px) {
          font-size: 17px;
        }
        @media (max-width: 1280px) {
          font-size: 15px;
        }
      }
    }
  }
`;
