import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
height: 3vh;
min-height: 80px;
border-bottom: 2px solid grey;
`
const Image = styled.img`
position: relative;
margin-left: 20px;
top: -50%;
`

const Input = styled.input`
`
export default function Header() {

    return (
        <Head>
            <Image src={require('./AdminDashPics/foster.png')} marginLeft="10%" width="140px" />
        </Head>
    )
}