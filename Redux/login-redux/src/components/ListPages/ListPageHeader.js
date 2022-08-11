import styled from "styled-components";

export const ListPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #252733;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  > div > p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.2px;
    color: #252733;
  }

  > div > img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    padding: 1px;
    border: 1.5px solid #dfe0eb;
  }
`;
