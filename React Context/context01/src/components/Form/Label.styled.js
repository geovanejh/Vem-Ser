import styled from "styled-components";

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: ${(props) => (props.errors && props.touched ? "red" : "#9fa2b4")};
`;
