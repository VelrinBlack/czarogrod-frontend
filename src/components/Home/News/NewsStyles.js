import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;

  width: 60%;
  margin: 150px auto;

  @media (max-width: 1920px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 786px) {
    width: 90%;
  }

  .heading {
    margin-bottom: 150px;
    font-size: 60px;
    text-align: center;

    @media (max-width: 1024px) {
      margin-bottom: 100px;
      font-size: 50px;
    }
    @media (max-width: 786px) {
      font-size: 40px;
    }
  }

  .see-more {
    width: 200px;
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
`;
