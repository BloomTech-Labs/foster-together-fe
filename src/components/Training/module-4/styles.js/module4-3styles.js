import styled from 'styled-components'

export const Page = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 64%;
  margin: auto;
`

export const MainContent = styled.text`
  font-size: 2rem;
  display: block;
  justify-content: center;
  line-height: 3rem;
  margin-bottom: 3rem;
  text-align: left;
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
`

export const ATag = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const Link = styled.a`
  color: black;
  font-size: 2rem;
  line-height: 3rem;
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
  font-size: 2rem;
  padding: 1rem;
`

export const Body = styled.text`
  font-size: 2rem;
  margin: 4rem 0rem 3rem 0rem;
`

export const Image4 = styled.img`
  width: 80%;
  margin: auto;
`

export const Signature = styled.input`
  width: 100%;
  height: 4.4rem;
  resize: none;
  font-size: 2rem;
  margin-bottom: 3rem;
  border: none;
  &::-webkit-input-placeholder {
    color: 'red';
  }
`

export const SignContain = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 100%;
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

export const Header2 = styled.h1`
  display: flex;
  align-items: left;
  font-size: 3.4rem;
  margin-bottom: 3rem;
  font-weight: 400;
  line-height: 4rem;
`
