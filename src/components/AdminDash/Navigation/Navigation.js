import React, { useState, useEffect } from 'react'
import { NavBar, Logo, Nav, Tab } from './NavigationStyles'
import { People, Map, DashboardIcon } from '../AdminDashPics/icons'

export default function Navigation(props) {
  const inactive = '#fff'
  const active = '#A6C9D8'
  const [color, setColor] = useState(active)
  const [color2, setColor2] = useState(active)
  const [color3, setColor3] = useState(active)
  useEffect(() => {
    if (props.routing.history.location.pathname == '/dash') {
      setColor(inactive)
    }
  }, [color])

  return (
    <NavBar>
      <Logo>
        <img
          src={require('../AdminDashPics/foster.png')}
          style={{ marginLeft: '10px' }}
          width='auto'
          height='100%'
        />
      </Logo>
      <Nav>
        <Tab
          onMouseEnter={() => {
            setColor(inactive)
          }}
          onMouseLeave={() => {
            setColor(active)
          }}
          active
        >
          <DashboardIcon color={color} />
          <p>Dashboard</p>
        </Tab>
        <Tab
          onMouseEnter={() => {
            setColor2(inactive)
          }}
          onMouseLeave={() => {
            setColor2(active)
          }}
        >
          <People color={color2} />
          <p>Database</p>
        </Tab>
        <Tab
          onMouseEnter={() => {
            setColor3(inactive)
          }}
          onMouseLeave={() => {
            setColor3(active)
          }}
        >
          <Map color={color3} />
          <p>Map</p>
        </Tab>
      </Nav>
    </NavBar>
  )
}
