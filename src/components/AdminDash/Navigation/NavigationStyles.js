import styled from 'styled-components'

export const NavBar = styled.div`
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: ${({ theme: { palette } }) => palette.primary.light};
`
