import styled from 'styled-components'
import { Flex, FlexCenter, ClickDiv } from '../../../GlobalStyles'
import activeTab from './active-tab.svg'
import dot from './notification-dot.svg'

export const NavBar = styled(FlexCenter)`
  background: ${({ theme: { palette } }) => palette.primary.main};
  justify-content: space-between;
  height: 6.4rem;
  width: 100%;
`

export const Logo = styled(FlexCenter)`
  height: 4.5rem;
  width: 15rem;
`

export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`

export const Nav = styled(FlexCenter)`
  height: 100%;
  width: 60rem;
  justify-content: space-between;
`
export const Tab = styled(FlexCenter)`
  height: 100%;
  width: 14.7rem;
  justify-content: space-evenly;
  color: #fff;
  background-image: ${props => (props.active ? `url(${activeTab})` : 'none')};
  background-position: center bottom;
  background-repeat: no-repeat;

  &:hover {
    color: #e2edec;
    cursor: pointer;
  }
`

export const Utilities = styled(Flex)`
  justify-content: space-between;
  padding-right: 40px;
  width: 12rem;
`

export const BtnImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`

export const IconContainer = styled(ClickDiv)`
  height: 100%;
`

export const PulseContainer = styled(IconContainer)`
  background-image: url(${dot});
  background-repeat: no-repeat;
  background-position: right top;
`

export const Menu = styled(Flex)`
  position: absolute;
  top: 3rem;
  padding-top: 3.4rem;
  right: 0rem;
  height: 16rem;
  width: 28rem;
  flex-direction: column;
  align-items: flex-end;
`

export const LogOut = styled.p`
  font-size: 2rem;
`

export const Display = styled(FlexCenter)`
  background-color: ${({ theme: { palette } }) => palette.primary.light};
  height: 50%;
  width: 50%;
  flex-direction: column;
  color: white;
  border-radius: 1px;
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`
