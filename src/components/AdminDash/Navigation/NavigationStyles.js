import styled from 'styled-components'

export const NavBar = styled.div`
  background: ${({ theme: { palette } }) => palette.primary.main};
  display: flex;
  justify-content: space-between;
  height: 6.4rem;
`

export const Logo = styled.div`
  height: 100%;
`

export const Nav = styled.nav`
  display: flex;
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
  border-bottom: ${props =>
    props.active
      ? ({ theme: { palette } }) => `3px solid ${palette.secondary.light}`
      : 'none'};

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
