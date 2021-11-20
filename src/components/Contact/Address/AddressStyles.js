import styled from "styled-components";

const StyledContainer = styled.div`
  height: 300px;
  margin-bottom: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1280px) {
    height: 600px;
    flex-direction: column;
    justify-content: center;
  }

  .textData {
    width: 35%;
    text-align: center;

    @media (max-width: 1280px) {
      width: 100%;
      margin-bottom: 50px;
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      font-size: 35px;
    }

    .name {
      margin-bottom: 40px;
    }
  }

  .map {
    width: 50%;
    height: 100%;

    @media (max-width: 1280px) {
      width: 100%;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export default StyledContainer;
