import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    z-index: -1;
  }

  .slide {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 50px 0;

    text-decoration: none;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 100px;
    }

    h2 {
      width: 100%;
      display: block;

      padding: 20px;
      background-color: rgba(0, 0, 0, 0.2);

      text-align: center;
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #fff;

      @media (max-width: 1440px) {
        font-size: 30px;
        letter-spacing: 1.5px;
      }
      @media (max-width: 1024px) {
        font-size: 20px;
        letter-spacing: 1px;
      }
      @media (max-width: 768px) {
        font-size: 15px;
        letter-spacing: 0.5px;
      }
    }
  }
`;
