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

const routes = [
  {
    title: 'Dashboard',
    icon: dashboard,
    alt: 'Icon of a dashboard',
    path: '/dashboard',
  },
  {
    title: 'Database',
    icon: people,
    alt: 'Icon of two people',
    path: '/database',
  },
  {
    title: 'Map',
    icon: map,
    alt: 'Icon of a map',
    path: '/map',
  },
]

export const UtilitiesContainer = ({ setOpen, open }) => {
  return (
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
  )
}

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
        {routes.map((route, i) => (
          <Tab
            key={i}
            onClick={() => push(route.path)}
            active={pathname === route.path}
          >
            <img src={route.icon} alt={route.alt} />
            <p>{route.title}</p>
          </Tab>
        ))}
      </Nav>
      <UtilitiesContainer open={open} setOpen={setOpen} />
    </NavBar>
  )
}
