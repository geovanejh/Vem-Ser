import styled from "styled-components";

export const Linha = styled.li`
  padding: ${(props) => (props.active ? "0 29px" : "0 32px")};
  background-color: ${(props) => (props.active ? "#3E4049" : "")};
  border-left: ${(props) => (props.active ? "3px solid #DDE2FF" : "none")};

  a {
    display: flex;
    align-items: center;
    gap: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: ${(props) => (props.active ? "#DDE2FF" : "#a4a6b3;")};
    text-decoration: none;
    padding: 18px 0;

    svg {
      color: ${(props) => (props.active ? "#DDE2FF" : "#a4a6b3;")};
    }
  }
`;
