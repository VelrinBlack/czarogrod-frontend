import styled from 'styled-components';

export const StyledContainer = styled.li`
  .link {
    position: relative;

    color: #000;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;

    transition: all 0.3s;

    @media (max-width: 1280px) {
      font-size: 14px;
    }

    &.active {
      &::before {
        width: 80%;
        margin-left: 10%;
      }
    }

    &::before {
      content: '';

      position: absolute;
      top: 100%;

      width: 0;
      height: 2px;

      margin-left: calc(50% - 1px);

      background-color: #98dad9;

      transition: all 0.3s;
    }

    &:hover::before {
      width: 100%;
      margin-left: 0;
    }
  }
`;
