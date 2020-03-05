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
type: radio
name: type
`

export const CityStateZip = styled.div`
  line-height: 5px;
  margin: 5% 0;
`
