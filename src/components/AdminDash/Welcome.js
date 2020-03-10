import React from 'react'
import { BounceRight } from 'animate-components'
import { WelcomeDiv, Title, Name } from './WelcomeStyles'

export default function WelcomeMessage() {
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
