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
  width: 50%;
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

export const MainContent = styled.text`
  line-height: 2.5rem;
  ul {
    li {
      position: relative;
      left: 6rem;
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

export const Section2 = styled.div``

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
`

export const ATag = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 15rem;
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

export const Statement = styled.h1``

export const MainContent1 = styled.h1`
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
export const Header2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  position: relative;
  right: 1rem;
`
