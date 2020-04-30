import styled from 'styled-components'
import Player from 'react-player'
import { Field } from 'formik'
import backArrow from '../../images/icons/back-arrow.svg'
import { Btn, Flex } from '../../GlobalStyles'

// shared styles

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
`

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1075px;
  margin: 75px auto;
  color: #343434;
`

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
`

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
`

export const MainSection = styled.section`
  width: 100%;
  margin: 50px 0 75px;
`

export const BulletList = styled.ul`
  margin: 0;
  padding: 0 0 0 2.5rem;
`

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
`

export const MediaWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  div {
    width: 49%;
  }
`

export const Media = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const MediaLeft = styled(Media)`
  justify-content: flex-start;
`

export const Video = styled(Player)`
  margin-top: -45px;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 2.4rem;
`

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
`

export const Error = styled.p`
  position: relative;
  left: 0;
  bottom: 50px;
  color: red;
`

export const Submit = styled(Btn)`
  align-self: center;
  width: 22rem;
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
  margin: 5%;
`

// end shared styles

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
`

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
`

export const LetterCircle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const MainContent = styled.text`
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: left;
`

export const Letter = styled.div`
  background-color: #faf9f6;
  width: 100%;
  margin: 0 auto;
  padding: 2% 5%;
`
export const ContextContainer = styled.div`
  display: flex;
  align-content: center;
  width: 65%;
  margin: 0 auto;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3% 0 3% 10%;
`

export const Circle = styled.div`
  width: 50px;
  display: flex;
  margin-bottom: -25px;
  justify-content: center;
  position: relative;
  top: -20px;
`

export const BigTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0 5%;
`

export const Header = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: #676767;
`

export const Section = styled.div`
  display: flex;
  width: 100%;
`

export const PlayerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 5% 0;
`

export const VideoText = styled.p`
  width: 50%;
  font-size: 1.2rem;
  color: #676767;
  line-height: 2rem;
`

export const Bold = styled.text`
  font-size: 2.3rem;
  line-height: 6rem;
  font-weight: 800;
`

// export const Cards = styled.div`
//   display: flex;
//   margin-bottom: 3%;
//   .closed {
//     color: red;
//   }
//   #open {
//     flex-direction: column;
//   }
//   &:hover {
//     .img {
//       transform: rotate(90deg);
//       transition: transform 300ms ease-in-out;
//     }
//     background-color: #253b44;
//     color: #ff8d86;
//   }
// `
export const Arrow = styled.img`
  width: 10%;
`

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-items: center;
  margin: 0 auto;
`

export const QuestionsInput = styled.textarea`
  width: 64%;
  height: 150px;
  resize: none;
  font-size: 2rem;
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  background-color: #253b44;
  margin-top: 5%;
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`

export const Center = styled.div`
  color: teal;
  width: 80%;
  padding: 1%;
  background-color: darkgrey;
  border: 1px solid orange;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Image = styled.img`
  margin: auto;
  max-height: 50%;
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: -10%;
  height: 100%;
`

export const Section2 = styled.div`
  display: flex;
  width: 75%;
  border-top: 1px solid black;
  flex-direction: column;
`
export const ATag = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const MainContent2 = styled.text`
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  border: 1px solid green;
  padding: 1%;
`

export const Header2 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 3rem;
`

export const Select = styled.select`
  height: 60px;
  width: 30%;
  font-size: 3rem;
`

export const Option = styled.option`
  font-size: 1.6rem;
`

export const CheckBox = styled.input`
  width: 50px;
  height: 50px;
  position: relative;
  left: 100%;
  top: -100px;
`
export const Half = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Image2 = styled.img`
  margin: auto;
  max-height: 50%;
  width: 50%;
  padding-right: 5%;
`
export const Image3 = styled.img`
  margin: auto;
  max-height: 50%;
  width: 50%;
  padding-left: 5%;
`

export const Link = styled.a`
  color: black;
`

export const InputHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const BigInput = styled.textarea`
  width: 86%;
  height: 150px;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
`
export const Quote = styled.p`
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  margin: 4%;
  font-style: italic;
`

export const Image4 = styled.img`
  width: 80%;
  height: auto;
  margin: auto;
`

export const Signature = styled.textarea`
  width: 86%;
  height: 4.4rem;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
`

export const SignContain = styled.div`
  margin-bottom: 4rem;
  border: 2px solid black;
  padding: 5px;
`

export const BigLink = styled.a`
  font-size: 3.1rem;
  text-align: left;
  font-weight: 500;
  color: black;
`

export const LetterText = styled.p`
  font-size: 1.8rem;
  text-align: left;
  line-height: 3rem;
  color: #375762;
  margin: 3% 0;

  b {
    font-size: 1.8rem;
  }
`
export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3% auto;
`
export const TestText = styled.p`
  color: #343434;
  margin: 3% 0;
  font-size: 2.2rem;
  font-style: italic;
  line-height: 4.2rem;
`

export const ContextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 0 auto;
  align-content: space-between;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
// training progress bar styles start
export const TrainingModuleOverlay = styled.div`

height: 50px;
margin-top: 20px;
p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
}

`
//! module 2 training styles START



export const Module2Section = styled.section`
  width: 100%;
  margin: 50px 0 75px;
`
export const Module2Text = styled.p`
  font-size: 2.4rem;
`

export const List = styled.ol`
  margin: 0;
  padding: 0 0 0 2.5rem;
`

export const Module2BulletList = styled.ul`
  margin: 0;
  padding: 0 0 0 2.5rem;
`

export const SmallList = styled(BulletList)`
  padding: 0 0 0 9rem;
`

export const Module2Step = styled.li`
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
`

export const SmallStep = styled(Step)`
  margin: 25px 0;
  p,
  span {
    font-size: 2rem;
  }
`

export const FormGroup = styled.div`
  margin: 25px 0;
`

export const Module2Label = styled.label`
  font-size: 2.4rem;
`

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
`

export const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #757575;
  height: 20px;
  width: 20px;
  background: ${props => (props.checked ? '#c4c4c4' : '#fff')};
  border-radius: ${props => (props.radio ? '100%' : 0)};
`


//! module 2 training styles END




//! module 3 training styles START


// export const Module3BigTitle = styled.h1`
//   font-size: 3rem;
// `
// export const Module3Page = styled.div`
//   display: flex;
//   align-items: start;
//   flex-direction: column;
//   width: 90%;
//   margin-left: 5%;
//   margin-top: 5%;
// `

// export const Module3Header = styled.h1`
//   font-size: 3.1rem;
//   text-align: left;
//   font-weight: 500;
// `

// export const Module3Section = styled.div`
//   display: flex;
//   width: 75%;
//   max-width: 850px;

//   border-top: 1px solid black;
// `

// export const Module3PlayerWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 5%;
// `

// export const Module3Bold = styled.text`
//   font-size: 1.7rem;
//   line-height: 4rem;
//   font-weight: 800;
// `

// export const Letter = styled.div`
//   background-color: #faf9f6;
//   width: 80vw;
//   padding: 2% 5%;
// `

// export const Circle = styled.div`
//   width: 8%;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   top: -20px;
// `

export const Cards = styled.div`
  display: flex;
  margin-bottom: 3%;
  .closed {
    color: red;
  }
  &:hover {
    .img {
      transform: rotate(90deg);
      transition: transform 300ms ease-in-out;
    }
    background-color: #c0c0c0;
    color: blue;
  }
  .open {
    flex-direction: column;
    background-color: white;
    color: black;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`


// export const Module3Input = styled.textarea`
//   width: 100%;
//   height: 150px;
//   resize: none;
//   font-size: 2rem;
//   padding: 1rem;
// `

// export const Footer = styled.div`
//   width: 100%;
//   background-color: #253b44;
//   margin-top: 5%;
// `



// export const Module3Half = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 50px;
//   width: 100%;
// `


// export const Module3Image3 = styled.img`
//   margin: auto;
//   max-height: 50%;
//   width: 35%;
//   padding-left: 5%;
// `

export const Ordered = styled.ol``

export const VideoHolder = styled.div`
  width: 50%;
  margin-left: 5%;
`
export const Indented = styled.ul`
  list-style-type: none;
  li {
    font-size: 2rem;
    margin-bottom: 16px;
  }
`

export const ProgressBar = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0vw;
  background-color: #f5f5f5;
  display: flex;
  align-items: space-evenly;
  flex-direction: column;
`

export const ProgressHeader = styled.div`
  width: 20%;
  padding: 1%;
  font-size: 3rem;
  border-right: 1px solid black;
  text-align: center;
`

export const HeaderHolder = styled.div`
  display: flex;
`
//! module 3 training styles END