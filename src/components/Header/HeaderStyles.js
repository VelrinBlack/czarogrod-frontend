import styled from 'styled-components';

export const StyledContainer = styled.header`
  position: sticky;
  top: -220px;

  height: 210px;

  background-color: #fff;

  z-index: 10;

  @media (max-width: 1024px) {
    height: 310px;
  }

  @media (max-width: 768px) {
    top: -190px;
  }
`;
