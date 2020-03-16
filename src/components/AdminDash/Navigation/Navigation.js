import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  NavBar,
  Logo,
  LogoImg,
  Nav,
  Tab,
  Utilities,
  IconContainer,
  PulseContainer,
} from './navStyles'
import { people, map, dashboard, pulse, userShield } from './icons'
import Container from '../UserOptions/OptionContainer'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { push } = useHistory()

  return (
    <NavBar>
      <Logo>
        <LogoImg src={require('../../../images/logo.png')} />
      </Logo>
      <Nav>
        <Tab
          onClick={() => push('/dashboard')}
          active={pathname === '/dashboard'}
        >
          <img src={dashboard} alt='Icon of a dashboard' />
          <p>Dashboard</p>
        </Tab>
        <Tab active={pathname === '/data'}>
          <img src={people} alt='Icon of two people' />
          <p>Database</p>
        </Tab>
        <Tab active={pathname === '/map'}>
          <img src={map} alt='Icon of a map' />
          <p>Map</p>
        </Tab>
      </Nav>
      <Utilities>
        <PulseContainer>
          <img src={pulse} alt='Icon of a pulse' />
        </PulseContainer>
        <IconContainer
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <img src={userShield} alt='Icon of a shield with a person' />
          {open ? <Container /> : null}
        </IconContainer>
      </Utilities>
    </NavBar>
  )
}
