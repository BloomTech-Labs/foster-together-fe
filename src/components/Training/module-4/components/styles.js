import styled from 'styled-components'

export const Page = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 68%;
  margin: auto;
`

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 2.5rem;
  width: 100%;
  font-weight: 400;
  margin: 6rem 0rem 4rem 0rem;
  padding-left: 15%;
  svg {
    margin: 0.5rem 1.5rem 0rem 0rem;
  }
`

export const Or = styled.ul`
  font-size: 1.8rem;
  width: 100%;
  margin: 1rem 0rem 1rem -2rem;
`

export const MainContent1 = styled.text`
  line-height: 2.5rem;
  ul {
    li {
      position: relative;
      left: 6rem;
      list-style-type: url('/images/Rectangle232.jpg');
    }
  }
`

export const Question = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3rem;
  margin: 0rem 8rem 1.8rem 0rem;
`

export const Title = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: -1rem;
`

export const Span = styled.text`
  font-weight: bold;
  font-size: 1.8rem;
`

export const Section = styled.div``

export const Input = styled.textarea`
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
`

export const Submit = styled.button`
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
`

export const ATag = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const ATag1 = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const Half = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Link = styled.a`
  color: black;
  text-decoration: none;
  color: Grey;
`

export const MainContent = styled.h1`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-dirction: row;
  margin: 0rem 0rem -2rem 0rem;
`

export const Video = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
`

export const Page1 = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 64%;
  margin: auto;
`

export const Paragraph = styled.text`
  font-size: 1.8rem;
  width: 45%;
  height: 100%;
  line-height: 3rem;
  margin: 4rem 8rem 0rem 0rem;
`

export const Paragraph1 = styled.text`
  display: flex;
  font-size: 1.8rem;
  line-height: 3rem;
  margin-left: 2.6rem;
`
export const Header1 = styled.h1`
  font-size: 3rem;
  display: flex;
  width: 100vw;
  position: relative;
  right: 1rem;
  margin: 5rem 0rem 4rem 0rem;
`

// MODULE 2 STYLES

export const Header2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  position: relative;
  right: 1rem;
`

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
`

export const Section2 = styled.text``

export const Body = styled.div`
  flex-direction: coloumn;
  font-size: 1.8rem;
  line-height: 2.9rem;
  margin-bottom: 1rem;
`

export const Body1 = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  margin-bottom: 1rem;
`

export const Video1 = styled.div`
  margin-left: 10rem;
`

export const MainContent2 = styled.div`
  display: flex;
  width: 100%;
  flex-dirction: row;
`

export const MainContent3 = styled.text`
  line-height: 2.5rem;
  width: 42%;
  margin: -1rem 4rem 2rem 3rem;
`
export const MainContent4 = styled.text`
  font-size: 1.8rem;
  line-height: 2.5rem;
`

export const Body2 = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
`
export const Half1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`

export const Question1 = styled.text`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 3rem;
`

export const Header3 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 5rem 0rem 4rem 0rem;
`

export const Image2 = styled.img``

export const ClickHere = styled.text`
  color: grey;
  font-size: 1.8rem;
`

export const Header4 = styled.h1`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  font-size: 1.8rem;
  font-weight: 300px;
`

export const Body3 = styled.h1`
  font-size: 1.8rem;
`

export const Quote = styled.p`
  font-size: 1.6rem;
  text-align: left;
  font-style: italic;
  margin-left: 2.5rem;
`

export const Statement = styled.h1`
  font-size: 1.8rem;
`

// MODULE 3 STYLES

export const MainContent5 = styled.text`
  font-size: 2rem;
  display: block;
  line-height: 3rem;
  margin-bottom: 3rem;
  font-weight: 400;
  align-items: center;
`

export const Span1 = styled.text`
  color: #b7b7b7;
  font-size: 2rem;
`

export const Link1 = styled.a`
  color: black;
  font-size: 2rem;
  line-height: 3rem;
  text-decoration: none;
`

export const InputHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const BigInput = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  font-size: 1.6rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`

export const Body4 = styled.text`
  font-size: 2rem;
  margin: 4rem 0rem 3rem 0rem;
  font-style: italic;
`

export const Image4 = styled.img`
  width: 80%;
  margin: auto;
`

export const Signature = styled.input`
  width: 100%;
  height: 4.6rem;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  resize: none;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`

export const SignContain = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 100%;
`

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
`

export const Header5 = styled.h1`
  display: flex;
  align-items: left;
  font-size: 3.4rem;
  margin-bottom: 3rem;
  font-weight: 400;
  line-height: 4rem;
`

export const MainContent6 = styled.h1`
  width: 100%;
  font-size: 2rem;
  display: block;
  line-height: 3rem;
  margin-bottom: 3rem;
  text-align: left;
`

// MODULE 4 STYLES

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
  }
`
export const MainContent7 = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
  margin-bottom: 4rem;
`

export const BigLink = styled.a`
  font-size: 2.1rem;
  text-align: left;
  color: black;
  text-decoration: none;
  color: #b7b7b7;
`

export const Span2 = styled.text`
  font-size: 2.1rem;
  font-weight: 500;
`

export const Body5 = styled.p`
  font-size: 2rem;
  margin-top: -3rem;
`

export const Header7 = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  display: flex;
  margin: 2rem 15rem 4rem 0rem;
`

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
`

export const Todo = styled.text`
  font-style: italic;
  font-size: 2.1rem;
  margin-top: 1rem;
`
export const NewSection = styled.text`
  display: flex;
  align-items: left;
  flex-direction: column;
`
