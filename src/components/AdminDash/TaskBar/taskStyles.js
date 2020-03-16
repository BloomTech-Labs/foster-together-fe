import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  color: ${({ theme: { palette } }) => palette.primary.main};
  font-size: 2.4rem;
  font-weight: bold;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
`

export const Card = styled.div`
  width: 24%;
  max-width: 26.9rem;
  height: 10.4rem;
  margin-right: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  border-radius: 5px;
  background: ${({ theme: { palette } }) => palette.primary.main};
`

export const CardTop = styled.div`
  width: 100%;
  padding-top: 10px;
  margin-bottom: -15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Number = styled.h3`
  font-size: 3.2rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
`

export const Icon = styled.div`
  cursor: pointer;
`

export const Description = styled.p`
  font-size: 1.4rem;
`
