import styled from 'styled-components'
import activeTab from '../AdminDashPics/active-tab.svg'
import circle from '../AdminDashPics/circle.svg'

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
  &:hover {
    cursor: pointer;
  }
`

export const PulseContainer = styled(IconContainer)`
  background-image: url(${circle});
  background-repeat: no-repeat;
  background-position: right top;
`
