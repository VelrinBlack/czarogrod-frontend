import styled from 'styled-components';

export const StyledContainer = styled.div`
  .slide {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 50px 0;

    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;

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
