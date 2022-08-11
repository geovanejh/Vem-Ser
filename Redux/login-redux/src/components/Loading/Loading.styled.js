import { keyframes } from "styled-components";
import styled from "styled-components";

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
    `;

export const LoadingSpinner = styled.div`
  width: calc(100%-255px) !important;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  > div {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #0f62fe; /* Black */
    border-radius: 50%;
    animation: ${spinner} 1s linear infinite;
  }
`;
