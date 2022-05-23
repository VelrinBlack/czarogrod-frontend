import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 50px;

  .carousel {
    .slide {
      position: relative;

      width: 100%;
      height: 400px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-size: cover;
      background-position: center;

      color: #fff;
      overflow: hidden;

      @media (max-width: 1024px) {
        margin-top: 20px;
        height: 250px;
      }

      .title {
        position: absolute;
        top: 40%;
        transform: translateY(-50%);

        width: 100vw;

        display: block;

        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;

        text-align: center;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 2px;

        @media (max-width: 1024px) {
          font-size: 30px;
        }

        @media (max-width: 786px) {
          font-size: 25px;
        }
      }
      .btn {
        position: absolute;
        top: 315px;
        left: 50%;
        transform: translateX(-50%);

        width: 150px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #399ca1;

        color: #fff;
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1.5px;

        border: none;
        border-radius: 4px;
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);

        cursor: pointer;
        overflow: hidden;
        z-index: 0;

        @media (max-width: 1024px) {
          width: 140px;
          height: 45px;
        }

        &::before {
          content: '';

          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background-color: #fff;

          transform: translateX(-100%);
          transition: transform 0.3s;
          z-index: -1;
        }

        &:hover {
          color: #399ca1;

          &::before {
            transform: translateX(0);
          }
        }

        &:focus {
          outline: none;
        }
      }
    }

    .slide1 {
      background-image: url('/images/slider/1.webp');
      @media (max-width: 1024px) {
        background-image: url('/images/slider/1-mobile.webp');
      }
    }
    .slide2 {
      background-image: url('/images/slider/2.webp');
      @media (max-width: 1024px) {
        background-image: url('/images/slider/2-mobile.webp');
      }
    }
    .slide3 {
      background-image: url('/images/slider/3.webp');
      @media (max-width: 1024px) {
        background-image: url('/images/slider/3-mobile.webp');
      }
    }
    .slide4 {
      background-image: url('/images/slider/4.webp');
      @media (max-width: 1024px) {
        background-image: url('/images/slider/4-mobile.webp');
      }
    }
  }
`;
