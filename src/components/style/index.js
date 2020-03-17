import styled from 'styled-components'
import { FlexContainer } from '../../GlobalStyles'

//styles that is being used in both LoginForm.js and signUpOverlay.js
export const Container = styled(FlexContainer)`
  margin: 10vh auto;
  border-radius: 10px;
  background: #fff;
  min-height: 80vh;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(180, 180, 180, 0.2),
    0 6px 20px 0 rgba(180, 180, 180, 0.19);
`

export const Sidebar = styled(FlexContainer)`
  position: relative;
  background: #f9f9f9;
  width: 30%;
  padding: 25px;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export const Logo = styled.div`
  margin-left: 25px;
  width: 20rem;
  height: auto;
`

export const SidebarTitle = styled.h2`
  font-size: 1.8rem;
  margin: 50px 0;
`

export const ListItem = styled.li`
  margin-bottom: 20px;
`

export const BackArrow = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const TabContainer = styled(FlexContainer)`
  font-size: 1.8rem;
  &:hover {
    cursor: pointer;
  }
`
export const Tab = styled(FlexContainer)`
  width: 10rem;
  height: 5rem;
  color: ${props =>
    props.active
      ? ({ theme: { palette } }) => palette.primary.main
      : ({ theme: { palette } }) => palette.primary.light};
  border-bottom: ${props =>
    props.active
      ? ({ theme: { palette } }) => `5px solid ${palette.primary.main}`
      : ({ theme: { palette } }) => `5px solid ${palette.primary.light}`};
`
