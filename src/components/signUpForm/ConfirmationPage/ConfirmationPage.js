import React from 'react'
import styled from 'styled-components'
import {
  NavBar,
  Logo,
  LogoImg,
  Utilities,
  IconContainer,
  PulseContainer,
} from '../../AdminDash/Navigation/navStyles'
import { Pulse, UserShield } from '../../AdminDash/Navigation/navIcons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MessageBox = styled.div`
  margin-top: 100px;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

const ConfirmationPage = () => {
  return (
    <Wrapper>
      <NavBar>
        <Logo>
          <LogoImg src={require('../../../images/logo.png')} />
        </Logo>
        <Utilities>
          <PulseContainer>
            <Pulse color='#E2EDEC' />
          </PulseContainer>
          <IconContainer>
            <UserShield color='#E2EDEC' />
          </IconContainer>
        </Utilities>
      </NavBar>
      <MessageBox>
        <p>
          Your application was successfully submitted! We'll be in touch with
          you soon.
        </p>
      </MessageBox>
    </Wrapper>
  )
}

export default ConfirmationPage
