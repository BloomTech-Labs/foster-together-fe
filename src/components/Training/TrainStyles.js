import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 85%;
  margin: auto;
`

export const MainContent = styled.text`
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: left;
  margin: 0 2%;
`

export const Letter = styled.div`
  background-color: #faf9f6;
  width: 50%;
  padding: 2% 5%;
  margin: 5% 0 0 0;
`
export const ContextContainer = styled.div`
  display: flex;
  width: 65%;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 3% 0 3% 10%;
`

export const Circle = styled.div`
  width: 3%;
  display: flex;
  justify-content: center;
  position: relative;
  top: -20px;
`

export const BigTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0 5%;
`

export const Header = styled.h1`
  font-size: 3.1rem;
  text-align: left;
  font-weight: 500;
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
  margin-bottom: 5%;
`

export const VideoText = styled.p`
  width: 30%;
  font-size: 1.2rem;
  color: #676767;
  line-height: 2rem;
`

export const Bold = styled.text`
  font-size: 2.3rem;
  line-height: 6rem;
  font-weight: 800;
`

export const Cards = styled.div`
  display: flex;
  margin-bottom: 3%;
  .closed {
    color: red;
  }
  #open {
    flex-direction: column;
  }
  &:hover {
    .img {
      transform: rotate(90deg);
      transition: transform 300ms ease-in-out;
    }
    background-color: #253b44;
    color: #ff8d86;
  }
`
export const Arrow = styled.img`
  width: 10%;
`

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-items: center;
`

export const Input = styled.textarea`
  width: 64%;
  height: 150px;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
  margin: 4%;
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  background-color: #253b44;
  margin-top: 5%;
`

export const Submit = styled.button`
  width: 223px;
  height: 56px;
  font-size: 4rem;
  color: white;
  background-color: #375762;
  border: none;
  margin: 2rem;
  border-radius: 10px;
  &:hover {
    color: black;
    cursor: pointer;
  }
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
