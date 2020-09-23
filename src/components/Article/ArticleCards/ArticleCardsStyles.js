import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 50px;

  .cards-wrapper {
    width: 80%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1920px) {
      width: 70%;
    }

    @media (max-width: 1024px) {
      width: 60%;
    }

    @media (max-width: 786px) {
      width: 95%;
    }
    .card {
      position: relative;
      width: 300px;
      height: 200px;

      display: flex;
      flex-direction: column;

      margin: 20px;

      cursor: pointer;

      h2 {
        position: absolute;
        bottom: 0;

        margin: 0;
        padding: 10px;

        background-color: rgba(0, 0, 0, 50%);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

        color: #fff;

        z-index: 1;
      }

      img {
        position: absolute;

        width: 100%;
        height: 100%;

        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
    }
  }
`;
