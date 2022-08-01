import styled from "styled-components";

export const AuthContainer = styled.div`
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
