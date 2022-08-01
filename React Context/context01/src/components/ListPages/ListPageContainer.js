import styled from "styled-components";

export const ListPageContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #dfe0eb;
  border-radius: 8px;

  > div {
    padding: 32px 32px 48px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div > h2 {
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #252733;
  }

  ul > li:first-child {
    grid-template-columns: ${(props) => props.layout};
    display: grid;
    border-bottom: 1.5px solid #dfe0eb;
    padding: 0 32px 12px 32px;

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.2px;
      color: #9fa2b4;
    }
  }
`;
