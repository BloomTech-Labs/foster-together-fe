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
  NameContainer,
  AssignedContainer,
  DocumentsContainer,
} from './profileStyles'
import { edit, address, email, phone } from './icons'
import { formatPhone } from '../../../utils/formatPhone'

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

const ProfileHeader = ({ type }) => {
  return (
    <Header>
      <HeaderLeft>
        <NameContainer>
          <NameWrapper>
            <Name>
              {profile.first_name} {profile.last_name}
            </Name>
            <img src={edit} alt='Edit icon' />
          </NameWrapper>
          <Role>{type}</Role>
        </NameContainer>
        <AssignedContainer>
          <h2>Assigned Family</h2>
        </AssignedContainer>
        <Contact>
          <h2>Contact Info</h2>
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
        <DocumentsContainer>
          <h2>Documents</h2>
        </DocumentsContainer>
      </HeaderLeft>
    </Header>
  )
}

export default ProfileHeader
