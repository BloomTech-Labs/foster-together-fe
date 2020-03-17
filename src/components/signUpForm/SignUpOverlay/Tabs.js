import React from 'react'
import { useHistory } from 'react-router-dom'
import { TabContainer, Tab } from '../../style'

const Tabs = () => {
  const history = useHistory()
  return (
    <TabContainer>
      <Tab onClick={() => history.push('/login')}>
        <span>Log In</span>
      </Tab>
      <Tab active>
        <span>Register</span>
      </Tab>
    </TabContainer>
  )
}

export default Tabs
