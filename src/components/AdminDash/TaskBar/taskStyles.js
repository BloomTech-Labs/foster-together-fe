import styled from 'styled-components'
import { Flex, FlexCenter } from '../../../GlobalStyles'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  color: ${({ theme: { palette } }) => palette.primary.main};
  font-size: 2.4rem;
  font-weight: bold;
`

export const Container = styled(Flex)`
  width: 100%;
`

export const Card = styled(Flex)`
  width: 24%;
  max-width: 26.9rem;
  height: 10.4rem;
  margin-right: 20px;
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  border-radius: 5px;
  background: ${({ theme: { palette } }) => palette.primary.main};
`

export const CardTop = styled(FlexCenter)`
  width: 100%;
  padding-top: 10px;
  margin-bottom: -15px;
  justify-content: space-between;
`

export const Number = styled.h3`
  font-size: 3.2rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
`

export const Description = styled.p`
  font-size: 1.4rem;
`
