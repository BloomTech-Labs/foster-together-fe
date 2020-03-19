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

const ProfileHeader = ({ member, type }) => {
  function changeIcon() {
    if (type === 'Family') {
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
              {member.first_name} {member.last_name}
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
              {member.address}
              <br />
              {member.city} {member.state} {member.zip}
            </ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={email} alt='Icon of an envelope' />
            <ContactInfo>{member.email}</ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={phone} alt='Icon of a mobile phone' />
            <ContactInfo>{formatPhone(member.phone)}</ContactInfo>
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
