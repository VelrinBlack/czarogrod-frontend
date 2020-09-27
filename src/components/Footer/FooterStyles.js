import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;

  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;

  padding-bottom: 20px;

  background-color: #f2f2f2;

  @media (max-width: 1024px) {
    height: 1100px;
  }
  @media (max-width: 768px) {
    height: 1000px;
  }

  .container {
    width: 80%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .box-container {
      min-width: 25%;
      max-width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1024px) {
        min-width: 80%;
        max-width: 80%;
      }
      @media (max-width: 768px) {
        min-width: 90%;
        max-width: 90%;
      }

      .box {
        width: 100%;

        @media (max-width: 1024px) {
          width: 60%;
        }
        @media (max-width: 768px) {
          width: 90%;
        }
        @media (max-width: 500px) {
          width: 100%;
        }

        &.logo-box {
          width: 60%;
          display: flex;
          align-items: center;

          @media (max-width: 1024px) {
            width: 40%;
          }
          @media (max-width: 500px) {
            width: 75%;
          }

          .logo {
            width: 100%;
            margin-bottom: 30px;
          }
        }

        &.menu-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .link {
            padding: 6px 0;

            color: #000;
            font-size: 18px;
            text-decoration: underline;
          }
        }

        &.contact-box {
          display: flex;
          flex-direction: column;
          justify-content: center;

          text-align: center;

          .contact-data {
            margin-bottom: 50px;

            .phone-number {
              font-size: 14px;
              a {
                color: #000;
                font-size: 18px;
                text-decoration: none;
              }
            }

            .email-address {
              font-size: 14px;
              a {
                color: #000;
                font-size: 18px;
                text-decoration: none;
              }
            }
          }

          .social-media {
            height: 70px;
            display: flex;
            justify-content: space-around;

            @media (max-width: 1920px) {
              height: 50px;
            }
            @media (max-width: 768px) {
              height: 60px;
            }

            .link {
              width: 30%;

              display: flex;
              justify-content: center;

              background-color: #399ca1;
              border-radius: 10px;

              .logo {
                width: 20%;

                @media (max-width: 1440px) {
                  width: 25%;
                }
                @media (max-width: 1024px) {
                  width: 20%;
                }
                @media (max-width: 500px) {
                  width: 30%;
                }
              }
            }
          }
        }
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;

    background-color: #4f4f4f;

    font-size: 12px;
    color: #fff;
  }
`;
