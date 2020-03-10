import styled from 'styled-components'

export const Root = styled.div`
  margin: 5px;
  cursor: pointer;
  width: ${props => (props.size ? props.size : 20)}px;
  height: ${props => (props.size ? props.size : 20)}px;
  position: relative;
  label {
    margin-left: 35px;
  }
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid
      ${props => (props.borderColor ? props.borderColor : '#C4C4C4')};
    background: ${props =>
      props.backgroundColor ? props.backgroundColor : '#FAFAFA'};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`

export const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
`

export const Fill = styled.div`
  background: ${props => (props.fillColor ? props.fillColor : '#DADADA')};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
  &::before {
    content: '';
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`

export const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`
