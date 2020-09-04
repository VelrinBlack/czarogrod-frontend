import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 50%;
  margin: 100px auto;

  @media (max-width: 1920px) {
    width: 60%;
    font-size: 40px;
  }

  @media (max-width: 1024px) {
    width: 70%;
    font-size: 30px;
  }

  @media (max-width: 786px) {
    width: 90%;
  }
`;
