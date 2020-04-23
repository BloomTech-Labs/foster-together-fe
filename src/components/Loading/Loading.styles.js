import styled from "styled-components";

export const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;

  position: absolute;
  z-index: 2;
  left: 45%;
  top: 35%;

  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;

  z-index: 1;
  background-color: grey;
  opacity: 0.5;
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8ad;
`;

export const LoaderTest = styled.div`
  left: 50%;
  top: 30%;
  z-index: 1000;
  position: absolute;
`;
