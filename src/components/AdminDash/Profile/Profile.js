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
  ProfileContainer,
  AppStatus,
} from './profileStyles'
import Navigation from '../Navigation/Navigation'
import Header from './Header'
import Stepper from './Stepper'

const profile = {
  first_name: 'Jarrod',
  last_name: 'Skahill',
  email: 'jarrod@gmail.com',
  address: '1111 Cool St',
  zip: '99999',
  phone: '8089111496',
  state: 'CA',
  city: 'San Dimas',
}

const Profile = ({ type }) => {
  return (
    <>
      <Navigation />
      <ProfileContainer>
        <Header profile={profile} type={type} />
        <ContentWrapper>
          <AppProgress>
            <ContentTitle>Application Progress</ContentTitle>
            <Stepper />
            <AppStatus>
              {profile.first_name}'s {type.toLowerCase()} application has been
              approved.
              <Link to='#'>Start Background Check Process</Link>
            </AppStatus>
          </AppProgress>
        </ContentWrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile
