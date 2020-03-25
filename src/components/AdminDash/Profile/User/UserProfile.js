import React from 'react'
import TrainingNav from '../../../Training/TrainingNav/NavBar'
import Header from '../Header'
import { ProfileContainer } from '../profileStyles'
import { useSelector } from 'react-redux'

import Notification from '../Notifications/Notification'

const UserProfile = () => {
  const { userInfo } = useSelector(state => state.auth)
  return (
    <div>
      <TrainingNav />
      <ProfileContainer>
        <Header user={userInfo} />
        <Notification />
      </ProfileContainer>
    </div>
  )
}

export default UserProfile
