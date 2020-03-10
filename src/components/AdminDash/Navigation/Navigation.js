import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  NavBar,
  Logo,
  LogoImg,
  Nav,
  Tab,
  Utilities,
  IconContainer,
  PulseContainer,
} from './NavigationStyles'
import {
  People,
  Map,
  DashboardIcon,
  Pulse,
  UserShield,
} from '../AdminDashPics/icons'

export default function Navigation(props) {
  const location = useLocation()

  return (
    <NavBar>
      <Logo>
        <LogoImg src={require('../AdminDashPics/foster.png')} />
      </Logo>
      <Nav>
        <Tab active={location.pathname === '/dashboard' ? true : false}>
          <DashboardIcon color='#A6C9D8' />
          <p>Dashboard</p>
        </Tab>
        <Tab active={location.pathname === '/data' ? true : false}>
          <People color='#A6C9D8' />
          <p>Database</p>
        </Tab>
        <Tab active={location.pathname === '/map' ? true : false}>
          <Map color='#A6C9D8' />
          <p>Map</p>
        </Tab>
      </Nav>
      <Utilities>
        <PulseContainer>
          <Pulse color='#E2EDEC' />
        </PulseContainer>
        <IconContainer>
          <UserShield color='#E2EDEC' />
        </IconContainer>
      </Utilities>
    </NavBar>
  )
}
