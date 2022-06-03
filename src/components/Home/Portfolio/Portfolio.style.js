import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding-top: 50px;
  margin: 70px auto 100px auto;

  background-color: #f2f2f2;

  .container {
    width: 70%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1400px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    .text-container {
      p {
        margin: 10px 0;
        font-size: 16px;
        line-height: 25px;
      }
    }

    .images-container {
      width: 100%;
      margin-top: 40px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 40px;
      grid-row-gap: 40px;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
      }

      img {
        width: 100%;
        height: 300px;

        object-fit: cover;

        @media (max-width: 1920px) {
          height: 200px;
        }
      }
    }

    .see-more {
      width: 320px;
      height: 80px;

      display: flex;
      align-items: center;

      padding: 0 20px;
      margin: 50px 0 50px 0;

      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: #399ca1;
      text-decoration: none;
      letter-spacing: 1.5px;

      background-color: transparent;
      border: 3px solid #399ca1;
      border-radius: 4px;

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
`;

export default StyledWrapper;
