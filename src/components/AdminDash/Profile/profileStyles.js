import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 20.7rem;
  background: #f9f9f9;
  color: #676767;
  margin: 0;
  padding: 46px 48px;
  display: flex;
  justify-content: space-between;
`
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.h2`
  font-size: 2.4rem;
  margin: 0 8px 0 0;
`

export const Role = styled.p`
  margin: 5px 0 0 0;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContactCard = styled.div`
  display: flex;
  margin-right: 30px;
`

export const ContactInfo = styled.address`
  font-style: normal;
  margin-left: 15px;
`

export const HeaderRight = styled.div``

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

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
  width: 95%;
  margin: 55px auto;
  display: flex;
  justify-content: space-between;
  color: #676767;
`

export const ContentTitle = styled.h3`
  font-size: 1.8rem;
`

export const AppProgress = styled.div`
  width: 60%;
`

export const Stepper = styled.div`
  width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
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
`

export const StepLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 100%;
  background: ${props =>
    props.active
      ? ({ theme: { palette } }) => palette.primary.main
      : '#EDEDED'};
  color: #fff;
  font-size: 1.4rem;
  margin-right: 8px;
`

export const StepConnector = styled.div`
  border-bottom: ${props =>
    props.active
      ? ({ theme: { palette } }) => `1px solid ${palette.primary.main}`
      : '1px solid #EDEDED'};
  width: ${props => (props.width ? props.width : '20%')};
`

export const Activity = styled.div`
  width: 30%;
`
