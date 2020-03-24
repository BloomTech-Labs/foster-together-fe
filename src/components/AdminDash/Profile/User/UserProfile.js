import React, { useEffect } from 'react'
import TrainingNav from '../../../Training/TrainingNav/NavBar'
import Header from '../Header'
import { ProfileContainer } from '../profileStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMemberById } from '../../../../redux/thunks/memThunks'
import Notification from '../Notifications/Notification'
import ProfileHeader from '../Header'

const UserProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMemberById(id))
  }, [dispatch, id])
  return (
    <div>
      <TrainingNav />
      <ProfileContainer>
        <Header />
        <Notification />
      </ProfileContainer>
    </div>
  )
}

export default UserProfile
