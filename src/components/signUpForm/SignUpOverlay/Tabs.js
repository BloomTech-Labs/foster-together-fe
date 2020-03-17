import React from 'react'
import { useHistory } from 'react-router-dom'
import { TabContainer, Tab } from '../../style'

const Tabs = () => {
  const history = useHistory()
  return (
    <TabContainer>
      <Tab
        justify='center'
        align='center'
        onClick={() => history.push('/login')}
      >
        <span>Log In</span>
      </Tab>
      <Tab justify='center' align='center' active>
        <span>Register</span>
      </Tab>
    </TabContainer>
  )
}

export default Tabs
