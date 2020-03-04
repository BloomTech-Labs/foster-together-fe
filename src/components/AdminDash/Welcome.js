import React from 'react'
import styled from 'styled-components'
import { BounceRight } from 'animate-components'

const WelcomeDiv = styled.div`
position: relative;
text-align: left;
font-size: 3rem;
width: 70%;
margin-left: 7%;
top: 30px;
margin-bottom: 3%;
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