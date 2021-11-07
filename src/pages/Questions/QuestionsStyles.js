import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto 120px auto;

  h1 {
    margin-bottom: 100px;
    font-size: 50px;
  }

  .loading {
    align-self: start;
  }

  @media (max-width: 1280px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    margin: 0 auto 80px auto;
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
