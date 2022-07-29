import styled from "styled-components";

export const Input = styled.input`
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
`;
