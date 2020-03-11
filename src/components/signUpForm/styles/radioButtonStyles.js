import styled from 'styled-components'

export const LabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 5px 15px 5px 5px;
  cursor: pointer;
`

export const RadioSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fafafa;
  border-radius: 100%;
  border: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fafafa;
  }
  &:after {
    content: '';
    position: relative;
    display: ${props => (props.checked ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: #dadada;
  }
`

export const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
`
