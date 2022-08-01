import styled from "styled-components";

export const AuthForm = styled.form`
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
`;
