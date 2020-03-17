import React from 'react'
import { Sidebar, Logo, SidebarTitle, BackArrow } from '../../style'
import { Instructions, ListItem } from '../styles/signUpOverlayStyles'
import logo from '../../../images/logo.png'
import backArrow from '../../../images/icons/back-arrow.svg'

const SidebarComponent = () => {
  return (
    <Sidebar>
      <div>
        <Logo>
          <img src={logo} alt='Foster Together logo' />
        </Logo>
        <SidebarTitle>Registering as a Foster Neighbor</SidebarTitle>
        <Instructions>
          <ListItem>Fill out the application below.</ListItem>
          <ListItem>
            We’ll email or call to confirm your spot, and set up your background
            check.
          </ListItem>
          <ListItem>Process your background check online ($20).</ListItem>
          <ListItem>
            We’ll send an outline of our agenda a few days before the training.
          </ListItem>
        </Instructions>
      </div>
      <div>
        <img src={backArrow} alt='Back arrow icon' />
      </div>
    </Sidebar>
  )
}

export default SidebarComponent
