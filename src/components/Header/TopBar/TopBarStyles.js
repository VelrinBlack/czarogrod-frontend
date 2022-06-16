import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #399ca1;

  z-index: 3;

  @media (max-width: 768px) {
    height: 68px;
  }

  .container {
    width: 80%;
    height: 20px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contact {
      width: 400px;

      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .contact-phone,
      .contact-mail {
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
          height: 35%;
        }
        @media (max-width: 500px) {
          margin-left: 40px;
          width: 200px;
        }

        .phone-number,
        .mail-address {
          margin-left: 10px;
          color: #fff;

          a {
            text-decoration: none;
            color: #fff;
          }
        }

        .icon {
          width: 15px;
        }
      }
    }

    .social-media {
      width: 50px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        width: 50%;
        justify-content: center;
      }

      @media (max-width: 500px) {
        width: 20%;
        margin-left: 50px;
      }

      .facebook-logo,
      .instagram-logo {
        width: 18px;
        height: 18px;

        display: flex;
        align-items: center;

        @media (max-width: 768px) {
          margin-left: 17px;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
