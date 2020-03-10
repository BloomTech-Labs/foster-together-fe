import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export const TableCtn = styled.div`
  display: flex;
  flex-flow: column wrap;
  line-height: 0;
  margin: 0;
`

export const TitleCtn = styled.div`
  margin-bottom: 23px;
`
