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
import { useSelector } from 'react-redux'

const ProfileHeader = ({ member, type }) => {
  const { userInfo } = useSelector(state => state.auth)
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
              {userInfo.first_name} {userInfo.last_name}
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
              {userInfo.address}
              <br />
              {userInfo.city} {userInfo.state} {userInfo.zip}
            </ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={email} alt='Icon of an envelope' />
            <ContactInfo>{userInfo.email}</ContactInfo>
          </ContactCard>
          <ContactCard>
            <img src={phone} alt='Icon of a mobile phone' />
            <ContactInfo>{formatPhone(userInfo.phone)}</ContactInfo>
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
