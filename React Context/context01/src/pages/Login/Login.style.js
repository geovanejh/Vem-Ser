import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #363740;
  height: 100vh;
  width: 100vw;
`;

export const LoginContainer = styled.div`
  background-color: #fff;
  padding: 40px 32px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
  }
  h3 {
    margin: 12px 0 32px 0;
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #a4a6b3;
    opacity: 0.7;
  }

  h2 {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #252733;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #9fa2b4;

    a {
      margin-left: 5px;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #3751ff;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0 32px 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    > div {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        text-align: right;
        letter-spacing: 0.1px;
        color: #9fa2b4;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }

  label {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: #9fa2b4;
  }

  input {
    background: #fcfdfe;
    border: 1px solid #f0f1f7;
    border-radius: 8px;
    padding: 8px 16px;
    width: 316px;
    height: 42px;

    ::placeholder {
      color: red;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.3px;
      color: #4b506d;
      opacity: 0.4;
    }
  }
`;
