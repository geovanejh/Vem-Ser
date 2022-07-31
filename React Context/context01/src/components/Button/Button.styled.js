import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? (props.disabled ? "gray" : "#3751FF") : props.background)};
  border-radius: ${(props) => (props.primary ? "6px" : props.borderRadius)};
  padding: ${(props) => (props.primary ? "14px 24px" : props.padding)};
  border: ${(props) => (props.primary ? "none" : props.border)};
  font-weight: ${(props) => (props.primary ? 600 : props.fontWeight)};
  font-size: ${(props) => (props.primary ? "14px" : props.fontSize)};
  line-height: ${(props) => (props.primary ? "20px" : props.lineHeight)};
  text-align: ${(props) => (props.primary ? "center" : props.textAlign)};
  letter-spacing: 0.2px;
  color: ${(props) => (props.primary ? "#fff" : props.color)};
  cursor: pointer;

  :hover {
    background: ${(props) => (props.primary ? (props.disabled ? "gray" : "#3783ff") : props.backgroundHover)};
  }
`;
