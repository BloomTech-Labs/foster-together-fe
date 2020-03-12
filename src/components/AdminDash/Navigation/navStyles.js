import styled from 'styled-components'
import activeTab from './active-tab.svg'
import dot from './notification-dot.svg'

export const NavBar = styled.div`
  background: ${({ theme: { palette } }) => palette.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.4rem;
  width: 100%;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  height: 4.5rem;
  width: 15rem;
`

export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 60rem;
  justify-content: space-between;
  align-items: center;
`
export const Tab = styled.div`
  height: 100%;
  width: 14.7rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${props =>
    props.active
      ? '#E2EDEC'
      : ({ theme: { palette } }) => palette.primary.light};
  background-image: ${props => (props.active ? `url(${activeTab})` : 'none')};
  background-position: center bottom;
  background-repeat: no-repeat;

  &:hover {
    color: #e2edec;
    cursor: pointer;
  }
`

export const Utilities = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  width: 12rem;
`
export const BtnImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`

export const IconContainer = styled.div`
  height: 1000%;
  &:hover {
    cursor: pointer;
  }
`

export const PulseContainer = styled(IconContainer)`
  background-image: url(${dot});
  background-repeat: no-repeat;
  background-position: right top;
`

export const Menu = styled.div`
  position: absolute;
  top: 3rem;
  padding-top: 3.4rem;
  right: 0rem;
  height: 16rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`

export const LogOut = styled.h1`
  font-size: 2rem;
`

export const Display = styled.div`
  background-color: ${({ theme: { palette } }) => palette.primary.light};
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 1px;
  &:hover {
    color: palevioletred;
  }
`
