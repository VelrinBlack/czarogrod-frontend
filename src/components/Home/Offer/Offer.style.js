import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 1230px;
  }
  @media (max-width: 599px) {
    height: 1400px;
  }

  .container {
    width: 70%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1400px) {
      width: 80%;
    }

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

      p {
        margin: 10px 0;
        font-size: 16px;
        line-height: 25px;
      }

      .see-more {
        width: 250px;
        height: 50px;

        display: block;

        padding: 10px 20px;
        margin: 50px 0 0 50%;

        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: #399ca1;
        text-decoration: none;
        letter-spacing: 1.5px;

        background-color: #fff;
        border: 3px solid #399ca1;
        border-radius: 4px;

        transform: translateX(-50%);
        cursor: pointer;
        overflow: hidden;
        z-index: 0;

        &:hover {
          box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
        }

        &:focus {
          outline: none;
        }
      }
    }

    .image-container {
      width: 450px;

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
        height: 600px;

        z-index: 1;
        box-shadow: 25px 25px 0 0 #399ca1;

        object-fit: cover;

        @media (max-width: 1024px) {
          height: 600px;
          margin-bottom: 50px;
          box-shadow: 20px 20px 0 0 #399ca1;
        }
      }
    }
  }
`;

export default StyledWrapper;
