import styled from "styled-components";

export const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
<<<<<<< HEAD
=======

  position: absolute;
  z-index: 2;
  left: 45%;
  top: 35%;

>>>>>>> acb2dbf57713117575ef6fafff887717f0792449
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
<<<<<<< HEAD
=======

export const LoaderBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
  background-color: grey;
  opacity: 0.5;
`;
>>>>>>> acb2dbf57713117575ef6fafff887717f0792449
