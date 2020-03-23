import styled from 'styled-components'

export const Page = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 64%;
  margin: auto;
`

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 6rem 0rem 4rem 0rem;
  padding-left: 15%;
  svg {
    margin: 0.5rem 1.5rem 0rem 0rem;
  }
`

export const Header1 = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 2.5rem;
  font-weight: 400;
`

export const MainContent = styled.text`
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
`

export const Section2 = styled.text`
  width: 100%;
`

export const Section = styled.div`
  display: flex;
  border-top: 1px solid black;
`

export const Submit = styled.button`
  width: 20%;
  height: 10vh;
  font-size: 4rem;
  color: white;
  background-color: #a1a1a1;
  border: none;
  margin: 2rem;
  border-radius: 45%;
  &:hover {
    color: black;
    cursor: pointer;
  }
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
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Signature = styled.textarea`
  width: 86%;
  height: 4.4rem;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
`

export const BigLink = styled.a`
  font-size: 2.5rem;
  text-align: left;
  color: black;
`

export const Span = styled.text`
  font-weight: 500;
  font-size: 1.5rem;
`
