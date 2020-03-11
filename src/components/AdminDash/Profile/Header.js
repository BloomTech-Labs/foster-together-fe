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
import { Edit, Address, Email, Phone } from './profileIcons'
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
            <Edit />
          </NameWrapper>
          <Role>{type}</Role>
        </div>
        <Contact>
          <ContactCard>
            <Address />
            <ContactInfo>
              {profile.address}
              <br />
              {profile.city} {profile.state} {profile.zip}
            </ContactInfo>
          </ContactCard>
          <ContactCard>
            <Email />
            <ContactInfo>{profile.email}</ContactInfo>
          </ContactCard>
          <ContactCard>
            <Phone />
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
