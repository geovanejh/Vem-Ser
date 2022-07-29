import styled from "styled-components";

export const PeopleSection = styled.div`
  width: 100%;
  padding: 30px;
  min-height: 100vh;
  background-color: #f7f8fc;
`;

export const PeopleHeader = styled.div`
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

export const PeopleContainer = styled.div`
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
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 0.5fr;
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
