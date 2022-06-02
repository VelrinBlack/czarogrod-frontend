import styled from 'styled-components';

export const StyledContainer = styled.div`
  img {
    width: 100%;
    height: 400px;

    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }
  }

  p {
    font-size: 16px;

    @media (max-width: 1280px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 425px) {
      font-size: 14px;
      text-align: center;
    }
  }
`;
