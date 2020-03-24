import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Link,
  ContentWrapper,
  ContentTitle,
  AppProgress,
  ActivityContainer,
  ActivityList,
  ActivityCard,
  Activity,
  AppStatus,
  ProfileContainer,
} from './profileStyles'
import Navigation from '../Navigation/Navigation'
import Header from './Header'
import Stepper from './Stepper'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberById } from '../../../redux/thunks/memThunks'
import Notification from './Notifications/Notification'

const ProfileActivity = () => (
  <ActivityContainer>
    <ContentTitle>Activity</ContentTitle>
    <ActivityList>
      <ActivityCard>
        <Activity>Application approved.</Activity>
      </ActivityCard>
      <ActivityCard>
        <Activity>Application received.</Activity>
      </ActivityCard>
    </ActivityList>
  </ActivityContainer>
)

const Profile = (steps, activeStep) => {
  const { id, membertype } = useParams()
  const { selectedMember } = useSelector(state => state.mem)
  const singleType = membertype === 'families' ? 'Family' : 'Neighbor'
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMemberById(membertype, id))
  }, [dispatch, id, membertype])
  return (
    <>
      <Navigation />
      <ProfileContainer>
        <Header member={selectedMember} type={singleType} />
        <ContentWrapper>
          <AppProgress>
            <ContentTitle>Application Progress</ContentTitle>
            <Stepper />
            <AppStatus>
              {selectedMember.first_name}'s application has been approved.
              <Link to='#'>Start Background Check Process</Link>
            </AppStatus>
          </AppProgress>
          <Notification />
          <ProfileActivity />
        </ContentWrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile
