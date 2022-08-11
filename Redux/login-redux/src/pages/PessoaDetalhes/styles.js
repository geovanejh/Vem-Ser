import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  padding: 32px;

  hr {
    background-color: #dfe0eb;
    border: none;
    height: 1px;
    margin: 12px 0 12px 0;
  }

  small {
    font-size: 14px;
    font-weight: 600;
  }

  > div {
    > div {
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 48px;
      }
    }

    ul li {
      display: grid;
      grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
      align-items: center;
      padding: 6px 0;
      font-size: 14px;
      font-weight: 500;

      > div {
        display: flex;
        justify-content: end;
        gap: 12px;
        align-items: center;
      }

      :hover {
        background-color: #f7f8ff;
        cursor: pointer;
      }

      button {
        padding: 3px 5px;

        :hover {
          background-color: #dfe0eb;
          border-radius: 10px;
        }
      }
    }

    ul > li:first-child {
      padding-top: 24px;
      color: #9fa2b4;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.2px;
      margin-bottom: 2px;

      :hover {
        background-color: #fff;
        cursor: default;
      }
    }
  }
`;
