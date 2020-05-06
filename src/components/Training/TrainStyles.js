import styled from "styled-components";
import Player from "react-player";
import { Field } from "formik";
import backArrow from "../../images/icons/back-arrow.svg";
import { Btn, Flex } from "../../GlobalStyles";

//! shared styles INSIDE training folder: START
//! trainingLetter2 and module 4.3
export const Half = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
//!Module 2.3, 3.3 and 3.4
export const BulletList = styled.ul`
  margin: 0;
  padding: 0 0 0 2.5rem;
`;


//! Module 2.1, 2.2, 2.3, 3.1, 3.3, 3.4 and simpleStep
export const Step = styled.li`
  font-size: 2.4rem;
  margin: 50px 0;
  padding-left: 1.7rem;
  font-weight: bold;
  h3,
  p,
  span {
    font-size: 2.4rem;
  }
  p {
    margin: 0 0 30px;
    font-weight: normal;
  }
  span {
    font-weight: bold;
  }

  &:first-child {
    margin-top: 0;
  }
`;
//! Module 1.1, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, ad 3.4
export const MediaWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  div {
    width: 49%;
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  max-width: 1075px;
  margin: 75px auto;
  color: #343434;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
`;

export const Text = styled.p`
  font-size: 2.4rem;
  span {
    font-size: 2.4rem;
    font-weight: bold;
  }
  a {
    font-size: 2.4rem;
    color: #bababa;
    text-decoration: none;

    &:hover {
      color: #343434;
    }
  }
`;
//! shared styles INSIDE training folder end

//! shared styles from OUTSIDE training folder: start
//! being used outside of Training and in Modules 1.1, 2.1, 2.2, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4
export const Submit = styled(Btn)`
  align-self: center;
  width: 22rem;
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
  margin: 5%;
`;
//! being used outside of Training and in Modules' 1.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4
export const Input = styled(Field)`
  width: 100%;
  margin: 40px 0 60px;
  font-size: 1.8rem;
  height: 16rem;
  padding: 20px 15px;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`;
//! shared styles from OUTSIDE training folder: end

//!TrainingLetter and TrainingLetter2 start
//!TrainingLetter
export const BackArrow = styled.div`
  position: relative;
  top: 30px;
  left: -45px;
  height: 24px;
  width: 27px;
  background-image: url(${backArrow});

  &:hover {
    cursor: pointer;
  }
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
//! trainingLetter.test.js
export const MainContent = styled.text`
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: left;
`;
//! trainingLetter.test.js, trainingLetterjs
export const Letter = styled.div`
  background-color: #faf9f6;
  width: 100%;
  margin: 0 auto;
  padding: 2% 5%;
`;

//!Module trainingLetter2
export const PlayerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 5% 0;
`;

export const VideoText = styled.p`
  width: 50%;
  font-size: 1.2rem;
  color: #676767;
  line-height: 2rem;
`;

export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3% auto;
`;

export const TestText = styled.p`
  color: #343434;
  margin: 3% 0;
  font-size: 2.2rem;
  font-style: italic;
  line-height: 4.2rem;
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
`;
//!Module TrainingLetter and TrainingLetter2 end

//!Module ONE styles start
//!1.1
export const Media = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Video = styled(Player)`
  margin-top: -45px;
`;
//!  need to clairfy difference between this and Forkik Form
export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 2.4rem;
`;

export const Error = styled.p`
  position: relative;
  left: 0;
  bottom: 50px;
  color: red;
`;

export const Div = styled.div`
  margin: 2% 0;
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }
  p {
    font-size: 2.4rem;
    margin-left: 2.5rem;
  }
`;
//!Module ONE styles end

//!Module TWO styles start
//!Survey.js in module  2
export const CheckBox = styled.input`
  width: 50px;
  height: 50px;
  position: relative;
  left: 100%;
  top: -100px;
`;
export const Module2Section = styled.section`
  width: 100%;
  margin: 50px 0 75px;
`;
export const Module2Text = styled.p`
  font-size: 2.4rem;
`;
//! 2.1
export const List = styled.ol`
  margin: 0;
  padding: 0 0 0 2.5rem;
`;
export const SmallList = styled(BulletList)`
  padding: 0 0 0 9rem;
`;

export const SmallStep = styled(Step)`
  margin: 25px 0;
  p,
  span {
    font-size: 2rem;
  }
`;

//! 2, 2.2
export const Module2Label = styled.label`
  font-size: 2.4rem;
`;
//! Survey.js in Module 2 and moduleTwo.test.js
export const FormGroup = styled.div`
  margin: 25px 0;
`;
export const CheckLabel = styled.label`
  display: block;
  position: relative;
  font-size: 1.8rem;
  padding-left: 3.5rem;
  margin-top: 2rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;
//! Survey.js in Module 2
export const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #757575;
  height: 20px;
  width: 20px;
  background: ${props => (props.checked ? "#c4c4c4" : "#fff")};
  border-radius: ${props => (props.radio ? "100%" : 0)};
`;
export const Module2Header2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  position: relative;
  right: 1rem;
`;
export const Module2Section2 = styled.text`
  margin-bottom: 3rem;
`;

//!Module TWO styles end

//!Module THREE styles start

//! Module 3.1, 3.2, 3.3, 3.4
export const MainSection = styled.section`
  width: 100%;
  margin: 50px 0 75px;
`;
//!Module 3.1
export const MediaLeft = styled(Media)`
  justify-content: flex-start;
`;
//! 3.2
export const Indented = styled.ul`
  list-style-type: none;
  li {
    font-size: 2rem;
    margin-bottom: 16px;
  }
`;
//!Module THREE styles end

//!Module FOUR styles start
//! 4 SHARED STYLES START

//!4.1, 4.2
export const Module4Input = styled(Field)`
  resize: none;
  font-size: 1.6rem;
  width: 100vw;
  height: 15vh;
  margin: 0rem 2rem 4rem 0rem;
  width: 100%;
  resize: none;
  padding: 1.4rem;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`;
//!4.1, 4.2, 4.3, 4.4
export const Module4Submit = styled.button`
  font-size: 1.8rem;
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
  width: 20rem;
  height: 5rem;
  &:hover {
    color: black;
    cursor: pointer;
  }
  border-radius: 4px;
  margin: 3rem 0rem 12rem 0rem;
`;
//!4.1, 4.2, 4.3,
export const ATag = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
//!4.2, 4.3, 4.4
export const Module4Link = styled.a`
  color: black;
  text-decoration: none;
  color: Grey;
  font-size: 2rem;
`;


//! 4.2, 4.3
export const Link = styled.a`
  color: black;
`;

//! 4.3, 4.4
export const InputHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
//! 4.3, 4.4
export const BigInput = styled.textarea`
  width: 86%;
  height: 150px;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
`;

//! 4.3, 4.4
export const Signature = styled(Field)`
  width: 86%;
  height: 4.4rem;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
`;
//! 4.3, 4.4
export const SignContain = styled.div`
  margin-bottom: 4rem;
  // border: 2px solid black;
  padding: 5px;
`;

//! 4.1 START

export const Header1 = styled.h1`
  font-size: 3rem;
  display: flex;
  width: 100vw;
  position: relative;
  right: 1rem;
  margin: 5rem 0rem 4rem 0rem;
`;

export const Module4Title = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: -1rem;
`;

export const Module4MainContent = styled.h1`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-dirction: row;
  margin: 0rem 0rem -2rem 0rem;
`;

export const MainContent1 = styled.text`
  line-height: 2.5rem;
  ul {
    li {
      position: relative;
      left: 5rem;
      list-style-type: none;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
`;

export const Paragraph = styled.text`
  font-size: 1.8rem;
  font-weight: 400;
  width: 45%;
  height: 100%;
  line-height: 3rem;
  margin: 4rem 8rem 0rem 0rem;
`;

export const Paragraph1 = styled.text`
  display: flex;
  font-size: 1.8rem;
  line-height: 3rem;
  flex-direction: column;
  margin-left: 2.6rem;
  p {
    font-size: 1.8rem;
  }
  span {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;

export const Module4Video = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
`;

export const Or = styled.ul`
  font-size: 1.8rem;
  width: 100%;
  margin: 1rem 0rem 1rem -2rem;
`;



export const Diamond = styled.div`
  font-size: 1rem;
  position: relative;
  left: 1rem;
`;

export const Question = styled.li`
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;
  margin: 0rem 8rem 1.8rem 0rem;
`;

//!4.2 START
export const Header2 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 3rem;
`;
export const Header3 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 5rem 0rem 4rem 0rem;
`;
export const Header4 = styled.h1`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  font-size: 1.8rem;
  font-weight: 300px;
`;

export const Body = styled.div`
  flex-direction: coloumn;
  font-size: 1.8rem;
  line-height: 2.9rem;
  margin-bottom: 1rem;
`;

export const Body1 = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Body2 = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
`;

export const Body3 = styled.h1`
  font-size: 1.8rem;
`;

export const Section2 = styled.div`
  display: flex;
  // width: 75%;
  // border-top: 1px solid black;
  flex-direction: column;
`;

export const MainContent2 = styled.text`
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  padding: 1%;
`;
export const MainContent3 = styled.text`
  line-height: 2.5rem;
  width: 42%;
  margin: -1rem 4rem 2rem 3rem;
`;

export const MainContent4 = styled.text`
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

export const ATag1 = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const Statement = styled.h1`
  font-size: 1.8rem;
`;

export const Quote = styled.p`
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  margin: 4%;
  font-style: italic;
`;

export const Span = styled.text`
  font-weight: bold;
  font-size: 1.8rem;
  color: black;
`;

export const Image2 = styled.img`
  margin: auto;
  max-height: 50%;
  width: 50%;
  padding-right: 5%;
`;

export const Video1 = styled.div`
  margin: 1rem 0rem 0rem 5rem;
`;

export const Half1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const ClickHere = styled.text`
  color: grey;
  font-size: 1.8rem;
`;

export const Question1 = styled.text`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 3rem;
`;
//!4.3 START
export const Header5 = styled.h1`
  display: flex;
  align-items: left;
  font-size: 3.4rem;
  margin-bottom: 3rem;
  font-weight: 400;
  line-height: 4rem;
`;

export const Body4 = styled.text`
  font-size: 2rem;
  margin: 4rem 0rem 3rem 0rem;
  font-style: italic;
`;
export const Page1 = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 64%;
  margin: auto;
`;
export const MainContent5 = styled.text`
  font-size: 2rem;
  display: block;
  line-height: 3rem;
  margin-bottom: 3rem;
  font-weight: 400;
  align-items: center;
  color: black;
`;
export const MainContent6 = styled.h1`
  width: 100%;
  font-size: 2rem;
  display: block;
  line-height: 3rem;
  margin-bottom: 3rem;
  text-align: left;
`;

export const MainContent8 = styled.text`
  font-size: 2rem;
  line-height: 3rem;
  margin: 0rem 0rem 3rem 3.5rem;
  color; black;
`;

export const Span1 = styled.text`
  color: #b7b7b7;
  font-size: 2rem;
`;

export const Image4 = styled.img`
  width: 80%;
  height: auto;
  margin: auto;
`;
//!4.4 START

export const Header6 = styled.li`
  display: flex;
  flex-direction: row;
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 3rem;
  ol {
    font-size: 2.1rem;
    margin-top: -20px;
    li {
      font-size: 2.1rem;
      margin: 3rem 0rem 3rem 0rem;
      position: relative;
      right: 1.8rem;
    }
    span {
      font-weight: bold;
      font-size: 2.1rem;
    }
  }
`;
export const Header7 = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  display: flex;
  margin: 2rem 15rem 4rem 0rem;
`;

export const Header8 = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 2.5rem;
  width: 50%;
  font-weight: 400;
  margin: 6rem 0rem 4rem 0rem;
  padding-left: 15%;
  svg {
    margin: 0.5rem 1.5rem 0rem 0rem;
  }
`;

export const MainContent7 = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
  margin-bottom: 4rem;
`;

export const NewSection = styled.text`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

export const Link1 = styled.a`
  color: black;
  font-size: 2rem;
  line-height: 3rem;
  text-decoration: none;
`;

export const Signature2 = styled.div`
  width: 100%;
  height: 12rem;
  resize: none;
  font-size: 2rem;
  padding: 1.4rem;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`;

export const Todo = styled.text`
  font-style: italic;
  font-size: 2.1rem;
  margin-top: 1rem;
`;

export const BigLink = styled.a`
  font-size: 2.1rem;
  text-align: left;
  font-weight: 500;
  color: black;
  text-decoration: none;
  //color: #a1a1a1;
`;

export const Span2 = styled.text`
  font-size: 2.1rem;
  font-weight: bold;
`;
//!Module FOUR styles end

//!Module FIVE styles start

export const Header = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: #676767;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3% 0 3% 10%;
`;

export const BigTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0 5%;
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

export const ContextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width:80%;
  margin: 0 auto;
  align-content: space-between;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionsInput = styled(Field)`
  width: 64%;
  height: 150px;
  resize: none;
  font-size: 2rem;
`;
//!Module FIVE styles end
