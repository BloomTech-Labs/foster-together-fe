import React, { useState } from 'react'
import { NavBar, Logo, LogoImg } from '../../AdminDash/Navigation/navStyles'
import { UtilitiesContainer } from '../../AdminDash/Navigation/Navigation'

const TrainingNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <NavBar>
      <Logo>
        <LogoImg src={require('../../../images/logo.png')} />
      </Logo>
      <UtilitiesContainer open={open} setOpen={setOpen} />
    </NavBar>
  )
}

export default TrainingNav
