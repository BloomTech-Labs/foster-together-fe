import React from 'react'
import {
  Header,
  HeaderLeft,
  NameWrapper,
  Name,
  Role,
  Contact,
  ContactCard,
  ContactInfo,
  HeaderRight,
  StatusContainer,
  Status,
  StatusRow,
  StatusTag,
  StatusIcon,
} from './profileStyles'
import { edit, address, email, phone } from './icons'
import { formatPhone } from '../../../utils/formatPhone'

const ProfileHeader = ({ profile, type }) => {
  return (
    <Header>
      <HeaderLeft>
        <div>
          <NameWrapper>
            <Name>
              {profile.first_name} {profile.last_name}
            </Name>
            <img src={edit} alt='Edit icon' />
          </NameWrapper>
          <Role>{type}</Role>
        </div>
        <Contact>
          <ContactCard>
            <img src={address} alt='Icon of buildings' />
            <ContactInfo>
              {profile.address}
              <br />
              {profile.city} {profile.state} {profile.zip}
            </ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={email} alt='Icon of an envelope' />
            <ContactInfo>{profile.email}</ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={phone} alt='Icon of a mobile phone' />
            <ContactInfo>{formatPhone(profile.phone)}</ContactInfo>
          </ContactCard>
        </Contact>
      </HeaderLeft>
      <HeaderRight>
        <StatusContainer>
          <StatusRow>
            <StatusTag>Application:</StatusTag> <Status>Approved</Status>
            <StatusIcon status='done' />
          </StatusRow>
          <StatusRow>
            <StatusTag>Background Check:</StatusTag>{' '}
            <Status>Not Started</Status>
            <StatusIcon status='inprogress' />
          </StatusRow>
          <StatusRow>
            <StatusTag>Training:</StatusTag>
            <Status>-</Status>
            <StatusIcon />
          </StatusRow>
        </StatusContainer>
      </HeaderRight>
    </Header>
  )
}

export default ProfileHeader
