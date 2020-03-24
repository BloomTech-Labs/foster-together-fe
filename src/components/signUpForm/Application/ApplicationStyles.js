import styled from 'styled-components'

export const Page= styled.div`
width: 80%;
display: flex;
flex-direction: column;
`
export const UpperSection = styled.div`
display: flex; 
align-items: flex-start;
width: 100%;
height: 70%;
`
export const UpperImage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 60%;
`
export const Image = styled.img`
height: 90%;
`
export const Header = styled.h1`
text-align: left;
font-size: 3rem;
margin-top: 6rem;
margin-bottom: 4rem;
`
export const List = styled.ol`
width: 30%;

`
export const Step = styled.li`
font-size: 2.5rem;
padding: 2rem;
`
export const Centerer = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
`
export const LittleImages = styled.div`
display: flex; 
flex-direction: column;
justify-content: space-evenly;
width: 6%;
`
export const LittleImage = styled.img`
width: 100%;
margin-top: 4%;
`
export const LittleImageOverlay = styled.div`
width: 100%;
border-radius: 50%;
`
export const MiddleSection = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 5%;
`

export const BigInput = styled.input`
width: 90%;
`

export const HalfInput = styled.input`
width: 40%;
margin-right: 10%;
`

export const Label = styled.label`
font-size: 2rem;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : '100%')};
  margin-bottom: 20px;
  margin-left: 5%;
`

export const Input = styled.input`
  height: 5.6rem;
  font-size: 1.6rem;
  background: #f9f9f9;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: 10px;
`

export const Labels = styled.label`
  font-size: 1.2rem;
  color: #545454;
  margin: 4px 10px;
`

export const Error = styled.p`
  font-size: 1.2rem;
  color: red;
  margin: 0 10px;
`

export const Select = styled.select`
  height: 5.6rem;
  font-size: 1.6rem;
  background: #f9f9f9;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: 10px;
`

export const Option = styled.option`
  font-size: 1.6rem;
`
export const RadioOption = styled.p`
font-size: 2rem; 
padding: 1%;
width: 100%;
`

export const RadioHolder = styled.div`
display: flex;
align-items: center;
`