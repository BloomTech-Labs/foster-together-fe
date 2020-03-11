import React from 'react'
import {
  Link,
  ContentWrapper,
  ContentTitle,
  AppProgress,
  ActivityContainer,
  ActivityList,
  ActivityCard,
  Activity,
} from './profileStyles'
import Navigation from '../Navigation/Navigation'
import Header from './Header'
import Stepper from './Stepper'

const Profile = ({ profile, type }) => {
  return (
    <>
      <Navigation />
      <Header profile={profile} type={type} />
      <ContentWrapper>
        <AppProgress>
          <ContentTitle>Application Progress</ContentTitle>
          <Stepper />
          <p>
            {profile.first_name}'s {type.toLowerCase()} application has been
            approved.
            <Link to='#'>Start Background Check Process</Link>
          </p>
        </AppProgress>
        <ActivityContainer>
          <ContentTitle>Activity</ContentTitle>
          <ActivityList>
            <ActivityCard>
              <Activity>{type} application approved.</Activity>
            </ActivityCard>
            <ActivityCard>
              <Activity>{type} application received.</Activity>
            </ActivityCard>
          </ActivityList>
        </ActivityContainer>
      </ContentWrapper>
    </>
  )
}

export default Profile
