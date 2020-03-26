import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'
import { Btn } from '../../../GlobalStyles'

export const Header = styled.header`
  width: 360px;
  background: #f9f9f9;
  height: 100vh;
  color: #676767;
  padding: 46px 48px;
  display: flex;
  flex-flow: column;
`
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ProfileContainer = styled.div`
  display: flex;
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const MemberIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${props => props.background};
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
`

export const Name = styled.h2`
  font-size: 2.4rem;
  margin: 0 25px;
`

export const Role = styled.p`
  margin-left: 60px;
`

export const NameContainer = styled.div`
  margin-bottom: 10%;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ContactCard = styled.div`
  display: flex;
`

export const AppStatus = styled.div`
  margin: 0px 10px 20px 25px;
`

export const ContactInfo = styled.p`
  font-style: normal;
  margin-left: 15px;
`

export const HeaderRight = styled.div``

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const AssignedContainer = styled.div`
  margin: 5% 0;
`

export const DocumentsContainer = styled.div``

export const StatusRow = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const StatusTag = styled.div`
  display: flex;
  width: 15rem;
  justify-content: flex-end;
  font-size: 1.6rem;
`

export const Status = styled.div`
  display: flex;
  width: 15rem;
  font-size: 1.6rem;
  margin-left: 8px;
`

export const StatusIcon = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  margin-left: 8px;
  border-radius: 100%;
  background: ${({ status }) =>
    status === 'done'
      ? '#6FD0A2'
      : status === 'inprogress'
      ? '#FFE871'
      : '#FF666F'};
`

export const ContentWrapper = styled.section`
  width: 75%;
  margin: 55px 55px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap column;
  color: #676767;
`

export const ContentTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0px 0px 10px 25px;
`

export const AppProgress = styled.div`
  width: 60%;
  margin: -15px 0px;
`

export const Stepper = styled.div`
  width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 20px 25px;
`

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 500;
  width: 28%;

  &:last-child {
    width: 12%;
    justify-content: flex-end;
  }
`

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  border: red solid 1px;
`

export const StepLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  width: 2.6rem;
  background: ${props =>
    props.active
      ? ({ theme: { palette } }) => palette.primary.main
      : '#EDEDED'};
  color: #fff;
  font-size: 1.4rem;
  margin-right: 8px;
`

export const StepConnector = styled.div`
  border-bottom: 1px solid #ededed;
  width: ${props => (props.width ? props.width : '20%')};
`

export const Link = styled(ReactLink)`
  color: ${({ theme: { palette } }) => palette.primary.main};
  margin-left: 20px;

  &:hover {
    color: ${({ theme: { palette } }) => palette.secondary.main};
  }
`

export const ActivityContainer = styled.div`
  width: 30%;
`

export const ActivityList = styled.div`
  margin-top: 30px;
`

export const ActivityCard = styled.div`
  height: 8.3rem;
  width: 100%;
  background: #f9f9f9;
  border-radius: 4px;
  margin-top: 15px;
  padding: 18px 16px;
`

export const Activity = styled.p`
  padding: 0;
  margin: 0;
`
export const Arrow = styled.img`
  z-index: -1;
  position: relative;
`
export const Application = styled.img`
  position: absolute;
  color: white;
  z-index: 1;
  margin-left: 5rem;
`
export const ProfileLabel = styled.label`
  color: red;
  z-index: 1;
  position: relative;
`
export const PseudoLink = styled.p`
  font-weight: bold;
  color: ${({ theme: { palette } }) => palette.secondary.main};

  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
    cursor: pointer;
  }
`

export const BtnContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`

export const Submit = styled(Btn)`
  width: 10rem;
  margin: 5%;
`

export const Approve = styled(Submit)`
  background: ${({ theme: { palette } }) => palette.secondary.main};
  color: #fff;
`
