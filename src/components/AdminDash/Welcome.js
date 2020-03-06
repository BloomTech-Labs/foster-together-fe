import React from 'react'
import styled from 'styled-components'
import { BounceRight } from 'animate-components'

const WelcomeDiv = styled.div`
  position: relative;
  text-align: left;
  width: 70%;
  top: 30px;
  margin-bottom: 3%;
`

const Title = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

const Name = styled.span`
  font-size: 3.2rem;
  color: ${({ theme: { palette } }) => palette.secondary.main};
`

export default function WelcomeMessage(props) {
  return (
    <WelcomeDiv>
      <BounceRight as='div' iterations='1'>
        <Title>
          Welcome back, <Name>Ana Jones</Name>
        </Title>
      </BounceRight>
    </WelcomeDiv>
  )
}
