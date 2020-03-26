import styled from 'styled-components'
import { Field, Form as FormikForm } from 'formik'
import { Flex, FlexCenter, Btn } from '../../../GlobalStyles'

export const Page = styled(Flex)`
  width: 100%;
  flex-direction: column;
`
export const UpperSection = styled(Flex)`
  width: 100%;
  height: 70%;
  justify-content: space-between;
`
export const UpperImage = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const Image = styled.img`
  height: auto;
`
export const Header = styled.h1`
  text-align: left;
  font-size: 3.2rem;
  margin-top: 6rem;
  margin-bottom: 4rem;
  font-weight: normal;
`
export const List = styled.ol`
  width: 40%;
`
export const Step = styled.li`
  font-size: 2.4rem;
  margin-bottom: 32px;
`
export const Centerer = styled(FlexCenter)`
  flex-direction: column;
  width: 80%;
  max-width: 1072px;
  margin: 0 auto;
`
export const LittleImages = styled(Flex)`
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
export const MiddleSection = styled(Flex)`
  margin-top: 5%;
`

export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FormGroup = styled.div`
  margin: 30px 0;
`

export const Label = styled.label`
  font-size: 2.4rem;
`

export const Input = styled(Field)`
  position: relative;
  width: 100%;
  margin: 25px 0 0;
  font-size: 1.8rem;
  height: ${props => (props.height ? props.height : '6rem')};
  padding: 20px 15px;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
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

export const Error = styled.p`
  font-size: 2rem;
  color: red;
  bottom: -5px;
  left: 0;
`

export const Submit = styled(Btn)`
  align-self: center;
  width: 22rem;
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
  margin: 25px 0 100px;
`
