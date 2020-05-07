import styled from "styled-components";
import { Flex } from "../../../GlobalStyles";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
`;

export const Letter = styled.div`
  background-color: #faf9f6;
  width: 100%;
  margin: 0 auto;
  padding: 2% 5%;
`;

export const Circle = styled.div`
  width: 50px;
  display: flex;
  margin-bottom: -25px;
  justify-content: center;
  position: relative;
  top: -20px;
`;

export const LetterCircle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LetterText = styled.p`
  font-size: 1.8rem;
  text-align: left;
  line-height: 3rem;
  color: #375762;
  margin: 3% 0;
  b {
    font-size: 1.8rem;
  }
`;

export const VideoText = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: #676767;
  line-height: 2rem;
`;

export const TestText = styled.p`
  color: #343434;
  margin: 3% 0;
  font-size: 2.2rem;
  font-style: italic;
  line-height: 4.2rem;
`;

export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3% auto;
`;

export const MediaWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  padding: 0 150px 0;
`;
