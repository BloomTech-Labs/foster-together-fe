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
  MemberIcon,
} from './profileStyles'
import { edit, address, email, phone } from './icons'
import { formatPhone } from '../../../utils/formatPhone'

const ProfileHeader = ({ user }) => {
  const userType = user?.type === 'families' ? 'Family' : 'Neighbor'
  function changeIcon() {
    if (userType === 'Family') {
      return <MemberIcon background='#3e8392'>F</MemberIcon>
    } else {
      return <MemberIcon background='#FF8D86'>N</MemberIcon>
    }
  }
  return (
    <Header>
      <HeaderLeft>
        <NameContainer>
          <NameWrapper>
            <div>{changeIcon()}</div>
            <Name>
              {user?.first_name} {user?.last_name}
            </Name>
            <img src={edit} alt='Edit icon' />
          </NameWrapper>
          <Role>{userType}</Role>
        </NameContainer>
        <AssignedContainer>
          <h2>Assigned Family</h2>
        </AssignedContainer>
        <Contact>
          <h2>Contact Info</h2>
          <ContactCard>
            <img src={address} alt='Icon of buildings' />
            <ContactInfo>
              {user?.address}
              <br />
              {user?.city} {user?.state} {user?.zip}
            </ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={email} alt='Icon of an envelope' />
            <ContactInfo>{user?.email}</ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={phone} alt='Icon of a mobile phone' />
            <ContactInfo>{formatPhone(user?.phone)}</ContactInfo>
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
