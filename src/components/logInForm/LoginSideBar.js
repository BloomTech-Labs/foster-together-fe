import React from 'react'
import { Sidebar, Logo, SidebarTitle } from '../style'
import logo from '../../images/logo.png'
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
      <div>
        <img src={arrowImg} alt='back arrow' />
      </div>
    </Sidebar>
  )
}

export default LoginSideBar
