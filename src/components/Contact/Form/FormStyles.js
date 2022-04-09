import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 1300px;

  display: flex;
  justify-content: space-around;

  margin-bottom: 200px;

  @media (max-width: 1024px) {
    margin-bottom: 300px;
  }

  .image-container {
    position: relative;
    width: 35%;
    height: 1000px;

    margin-top: 100px;

    img {
      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 1280px) {
      display: none;
    }
  }

  form {
    width: 50%;
    height: 900px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1280px) {
      width: 80%;
    }
    @media (max-width: 1024px) {
      margin-top: 60px;
    }
    @media (max-width: 500px) {
      height: 1000px;
    }

    h1 {
      width: 100%;
      margin-bottom: 50px;

      font-size: 50px;
      text-align: center;
    }

    p {
      position: relative;
      width: 100%;

      label {
        display: block;
        margin-bottom: 15px;

        text-align: center;
      }

      input,
      textarea {
        box-sizing: border-box;

        width: 100%;

        margin: 0;
        padding: 0 15px;

        background-color: #fff;
        border-radius: 3px;
        border: 2px solid #f2f2f2;

        font-size: 16px;

        @media (max-width: 500px) {
          font-size: 13px;
          padding: 0 10px;

          &::placeholder {
            color: transparent;
          }
        }
      }

      input {
        height: 60px;

        @media (max-width: 500px) {
          height: 60px;
        }
      }

      textarea {
        box-sizing: border-box;

        height: 200px;
        padding-top: 10px;

        @media (max-width: 500px) {
          height: 150px;
        }
      }

      .rodo {
        line-height: 20px;

        span,
        a {
          font-size: 14px;
        }

        @media (max-width: 500px) {
          line-height: 15px;

          span,
          a {
            font-size: 11px;
          }
        }

        .rodo-checkbox {
          width: 14px;
          height: 14px;

          margin-right: 10px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

    .errorTxt {
      font-size: 14px;
      color: red;

      @media (max-width: 500px) {
        top: 75%;
        text-align: center;
      }
    }

    .submit {
      position: relative;

      width: 100%;
      height: 60px;

      padding: 0;

      background-color: #399ca1;
      border: none;
      border-radius: 4px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #fff;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        transform: scale(0.97);
      }

      &:focus {
        outline: none;
      }
    }

    .polityka {
      text-decoration: none;
      color: #399ca1;

      @media (max-width: 500px) {
        font-size: 12px;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .send-info {
      text-align: center;
    }
  }
`;
