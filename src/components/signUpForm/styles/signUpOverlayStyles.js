import styled from 'styled-components'

export const MainContent = styled.div`
  width: 70%;
  padding: 25px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Instructions = styled.ol`
  font-size: 1.4rem;
  margin: 0 0 0 -8px;
  padding: 0 25px;
`

export const ListItem = styled.li`
  margin-bottom: 20px;
`

export const BackArrow = styled.div``

export const TabContainer = styled.div`
  display: flex;
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`

export const Stepper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`

export const Step = styled.div`
  display: flex;
  align-items: center;
`

export const StepLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.6rem;
  width: 3.5rem;
  border-radius: 100%;
  background: ${props =>
    props.active
      ? ({ theme: { palette } }) => palette.secondary.main
      : '#a1a1a1'};
  color: #fff;
  font-size: 1.6rem;
  margin-right: 8px;
`

export const StepTitle = styled.div`
  color: ${props =>
    props.active
      ? ({ theme: { palette } }) => palette.secondary.main
      : '#a1a1a1'};
  font-size: 1.6rem;
`

export const StepConnector = styled.div`
  width: 60px;
  border-bottom: ${props =>
    props.active
      ? ({ theme: { palette } }) => `1px solid ${palette.secondary.main}`
      : '1px solid #a1a1a1'};
  margin: 0 8px;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
  width: 100%;
`

export const BackBtn = styled.button`
  color: #757575;
  background: #fff;
  border: none;
  width: 8rem;
  height: 5.6rem;
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`

export const NextBtn = styled.button`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  height: 5.6rem;
  width: 14rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`
