import styled from 'styled-components'

export const WelcomeDiv = styled.div`
  position: relative;
  text-align: left;
  width: 70%;
  top: 30px;
  margin-bottom: 3%;
`

export const Title = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export const Name = styled.span`
  font-size: 3.2rem;
  color: ${({ theme: { palette } }) => palette.secondary.main};
`
