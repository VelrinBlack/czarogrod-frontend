import styled from 'styled-components';

export const MobileNavigation = styled.nav`
  position: absolute;
  top: 20px;

  width: 100%;

  .logo-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 60px;

    .logo-img {
      height: 110px;
    }

    .subtitle-img {
      height: 60px;
      margin-top: 10px;
    }
  }

  .hamburger-btn {
    position: absolute;
    left: 50%;
    top: 250px;
    transform: translateX(-50%);

    width: 55px;
    height: 45px;

    background-color: transparent;
    border: none;

    z-index: 3;
    cursor: pointer;
    transition: all 0.3s;

    &.hamburger-btn-active {
      position: fixed;
      top: 50px;
      left: 30px;

      @media (max-width: 768px) {
        top: 80px;
      }

      div {
        span {
          background-color: transparent;
        }
        span::before {
          transform: translateY(0) rotate(45deg);
        }
        span::after {
          transform: translateY(0) rotate(-45deg);
        }
      }
    }

    &:focus {
      outline: none;
    }

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 30px;
      height: 20px;

      span {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        width: 100%;
        height: 3px;

        background-color: black;

        transition: all 0.3s;

        &::before,
        &::after {
          content: '';

          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 3px;

          background-color: black;
        }

        &::before {
          transform: translateY(-10px);
          transition: all 0.3s;
        }
        &::after {
          transform: translateY(10px);
          transition: all 0.3s;
        }
      }
    }
  }

  .navigation {
    position: fixed;
    top: 36px;
    left: 0;
    transform: translateY(-115%);

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
    padding: 0;

    background-color: #fff;

    list-style: none;

    z-index: 2;
    transition: all 0.3s 0.1s ease-in-out;

    &.active {
      transform: translateY(0);
      padding-top: 50px;

      transition: padding-top 0.3s;

      @media (max-width: 768px) {
        padding-top: 80px;
      }
    }

    li {
<<<<<<< HEAD
      height: 60px;
      text-align: center;
=======
      width: 100%;
      height: 60px;

      text-align: center;

      a {
        text-decoration: none;
        color: #000;
      }
>>>>>>> 666354762b09944a5bec25808e82a00c65c1324f
    }
  }
`;

export const DesktopNavigation = styled.nav`
  position: fixed;
  top: 0;

  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  background-color: #fff;
  box-shadow: 0 0 10px 1px #f2f2f2;

  z-index: 2;
  transition: all 0.3s;

  &.minimalized {
    height: 100px;

    box-shadow: 0 0 10px 10px #f2f2f2;
    transform: translateY(-40px);
    z-index: 3;
  }

  .container {
    width: 80%;
    height: 80%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
      width: 96%;
    }

    .logo-link {
      height: 100%;
      display: flex;
      align-items: center;

      .logo-img {
        height: 100%;
      }

      .subtitle-img {
        height: 50%;
      }
    }

    .navigation {
      width: 700px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      list-style: none;

      @media (max-width: 1280px) {
        width: 600px;
      }
    }
  }
`;
