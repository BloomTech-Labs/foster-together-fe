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
import { People, Map, DashboardIcon, Pulse, UserShield } from './navIcons'
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
          <DashboardIcon color='#A6C9D8' />
          <p>Dashboard</p>
        </Tab>
        <Tab active={pathname === '/data'}>
          <People color='#A6C9D8' />
          <p>Database</p>
        </Tab>
        <Tab active={pathname === '/map'}>
          <Map color='#A6C9D8' />
          <p>Map</p>
        </Tab>
      </Nav>
      <Utilities>
        <PulseContainer>
          <Pulse color='#E2EDEC' />
        </PulseContainer>
        <IconContainer
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <UserShield color='#E2EDEC' />
          {open ? <Container /> : null}
        </IconContainer>
      </Utilities>
    </NavBar>
  )
}
