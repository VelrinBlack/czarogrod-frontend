import styled from 'styled-components';

export const StyledContainer = styled.header`
  position: sticky;
  top: -220px;

  height: 200px;

  background-color: #fff;

  z-index: 10;

  @media (max-width: 1024px) {
    height: 330px;
  }

  @media (max-width: 768px) {
    top: -192px;
  }
`;
