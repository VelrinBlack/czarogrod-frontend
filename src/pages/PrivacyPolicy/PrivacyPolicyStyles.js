import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 70vw;
  margin: 350px auto;
  font-size: 16px;

  @media (max-width: 1440px) {
    width: 90vw;

    * {
      font-size: 13px;
    }
  }

  @media (max-width: 1024px) {
    * {
      font-size: 10px;
    }
  }
`;
