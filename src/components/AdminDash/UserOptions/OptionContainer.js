import React from 'react'
import { Menu, LogOut, Display } from '../Navigation/NavigationStyles'
import { useHistory } from 'react-router-dom'

const Container = () => {
  const { push } = useHistory()
  return (
    <Menu>
      <Display>
        <LogOut
          onClick={() => {
            localStorage.removeItem('token')
            push('/login')
          }}
        >
          Log Out
        </LogOut>
      </Display>
    </Menu>
  )
}

export default Container
