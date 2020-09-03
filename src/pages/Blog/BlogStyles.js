import styled from 'styled-components';

export const StyledContainer = styled.div`
  .posts-container {
    width: 50%;
    margin: 50px auto 100px auto;

    @media (max-width: 1920px) {
      width: 70%;
    }
    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 786px) {
      width: 90%;
    }
  }
`;
