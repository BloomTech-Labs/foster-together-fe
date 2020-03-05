import styled from 'styled-components'
import activeTab from '../AdminDashPics/active-tab.svg'

export const NavBar = styled.div`
  background: ${({ theme: { palette } }) => palette.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.4rem;
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
    props.active ? '#fff' : ({ theme: { palette } }) => palette.primary.light};
  background-image: ${props => (props.active ? `url(${activeTab})` : 'none')};
  background-position: center bottom;
  background-repeat: no-repeat;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`

export const Utilities = styled.div`
  display: flex;
  padding-right: 40px;
`

export const BtnImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`
