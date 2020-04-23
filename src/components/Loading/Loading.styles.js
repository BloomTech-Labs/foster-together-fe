import styled from "styled-components";

export const LeftIcon = styled.img`
  position: absolute;
  left: 35vw;
  top: 40%;

  transform: scale(0.75);
  z-index: 2;

  animation-name: left-slide;
  animation-duration: 1s;

  @keyframes left-slide {
    from {
      left: 55vw;
    }

    to {
      left: 35vw;
    }
  }
`;

export const RightIcon = styled.img`
  transform: scale(0.75);
  position: absolute;
  left: 35vw;
  top: 50%;

  transform: scale(0.75);
  z-index: 2;

  animation-name: right-slide;
  animation-duration: 1s;

  @keyframes right-slide {
    from {
      left: 15vw;
    }

    to {
      left: 35vw;
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
  background-color: #828282;
  opacity: 0.95;
`;
