import styled from 'styled-components'
export const ReviewContainer = styled.div`
  background: #f9f9f9;
  margin: auto;
  padding: 2%;
`
export const Reviewtextone = styled.p`
  font-size: 16px;
  font-weight: 100;
`
export const RadioBtn = styled.button`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: grey;
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-evenly;
`
export const Input = styled.input`
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: white;
border: #C4C4C4 solid 3px
border-radius: 50%;


&:hover {
    checked: checked;

}
`
export const Label = styled.label`
  margin-top: 2%;
  padding-left: 15px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const InputArea = styled.div`
  display: flex; 
  flex-flow nowrap row;
`
export const Span = styled.span`
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
`

export const CityStateZip = styled.div`
  line-height: 5px;
  margin: 5% 0;
`
