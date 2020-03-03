import React from 'react'
import styled from 'styled-components'
import { BounceRight } from 'animate-components'

const WelcomeDiv = styled.div`
text-align: center;
font-size: 3rem;
`

export default function WelcomeMessage(props){

    return(
        <WelcomeDiv>
            <BounceRight as="div" iterations="1">
                Welcome back, Ana Jones
            </BounceRight>

         </WelcomeDiv>
    )
}