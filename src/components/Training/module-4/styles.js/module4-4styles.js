import styled from 'styled-components'

export const Page = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 64%;
  margin: auto;
  line-height: 3rem;
`

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 6rem;
  padding-left: 15%;
  svg {
    margin: 0.5rem 1.5rem 0rem 0rem;
  }
`

export const Header1 = styled.li`
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

export const MainContent = styled.text`
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: left;
`
export const Section2 = styled.div``

export const Section = styled.div`
  display: flex;
  border-top: 1px solid black;
`

export const Submit = styled.button`
  font-size: 1.8rem;
  color: white;
  background-color: #385763;
  width: 20rem;
  height: 5rem;
  &:hover {
    color: black;
    cursor: pointer;
  }
  margin: 5rem 0rem 10rem 0rem;
  border-radius: 4px;
`

export const ATag = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const Link = styled.a`
  color: black;
`

export const InputHolder = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem 3rem 0rem;
`

export const Signature = styled.textarea`
  width: 100%;
  height: 4.4rem;
  resize: none;
  font-size: 1.4rem;
  padding: 1.4rem;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`

export const BigLink = styled.a`
  font-size: 2.1rem;
  text-align: left;
  color: black;
  text-decoration: none;
  color: #b7b7b7;
`

export const Span = styled.text`
  font-size: 2.1rem;
  font-weight: 500;
`

export const Body = styled.p`
  font-size: 2rem;
  margin-top: -3rem;
`
export const Header2 = styled.h1`
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
