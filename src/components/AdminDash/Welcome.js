import React from 'react'
import { BounceRight } from 'animate-components'
import { WelcomeDiv, Title, Name } from './WelcomeStyles'
import { useSelector } from 'react-redux'

export default function WelcomeMessage() {
  const { firstName } = useSelector(state => state.auth)
  return (
    <WelcomeDiv>
      <BounceRight as='div' iterations='1'>
        <Title>
          Welcome back, <Name>{firstName}</Name>
        </Title>
      </BounceRight>
    </WelcomeDiv>
  )
}
