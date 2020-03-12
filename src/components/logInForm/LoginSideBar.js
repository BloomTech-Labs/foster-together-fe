import React from 'react'
import {
  Container,
  Sidebar,
  Logo,
  SidebarTitle,
  BackArrow,
  TabContainer,
  Tab,
} from '../style'
import logo from '../../images/logo.svg'
import arrowImg from '../../images/icons/back-arrow.svg'

const LoginSideBar = () => {
  return (
    <Sidebar>
      <div>
        <Logo>
          <img src={logo} alt='Foster Together logo' />
        </Logo>
        <SidebarTitle>
          Children need families{' '}
          <p fontWeight='none'> And families need support</p>
        </SidebarTitle>
      </div>
      <BackArrow>
        <img src={arrowImg} alt='back arrow' />
      </BackArrow>
    </Sidebar>
  )
}

export default LoginSideBar
