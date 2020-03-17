import styled from 'styled-components'
import { FlexContainer, Btn, Circle } from '../../../GlobalStyles'

export const MainContent = styled(FlexContainer)`
  width: 70%;
  padding: 25px 120px;
  justify-content: flex-start;
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

export const TabContainer = styled(FlexContainer)`
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`

export const Stepper = styled(FlexContainer)`
  width: 100%;
  margin: 50px 0;
`

export const StepLabel = styled(Circle)`
  height: 3.6rem;
  width: 3.5rem;
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

export const BtnContainer = styled(FlexContainer)`
  margin-top: 80px;
  width: 100%;
`

export const BackBtn = styled(Btn)`
  color: #757575;
  background: #fff;
  width: 8rem;
`

export const NextBtn = styled(Btn)`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  width: 14rem;
  text-transform: uppercase;
`
