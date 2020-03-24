import React from 'react'
import { NotifyDiv, NotifyText, NotifyLink } from './notificationStyles'
import { useHistory } from 'react-router-dom'

const Notification = () => {
  const { push } = useHistory()
  return (
    <div>
      <NotifyDiv>
        <img src={require('../icons/info.svg')} width='41px' height='42px' />
        <NotifyText>
          Your application has been submitted and is currently awaiting admin
          confirmation. An email notification will be sent to you when it has
          been approved. It should take no longer than 3 days.
        </NotifyText>
      </NotifyDiv>
    </div>
  )
}

const Step2 = props => {
  return (
    <NotifyText>
      Congratulations, your application has been approved. You are now ready to
      take the training.
      <NotifyLink
        onClick={push => {
          push('/modulestart')
        }}
      >
        Click here to get started
      </NotifyLink>
    </NotifyText>
  )
}

const Step3 = () => {
  return (
    <NotifyText>
      Thank you for completing the training! Please allow for another few days
      while we look over your answers. We thank you for your patience. An email
      will be sent once you are ready to move on to the next step.
    </NotifyText>
  )
}

const Step4 = () => {
  return (
    <NotifyText>
      We have reviewed your training and you have been approved. Now for the
      final step of the approval process,
      <NotifyLink>please take this background test.</NotifyLink>
      <br />
      <br />
      We have also sent this message to you in email form.
    </NotifyText>
  )
}

const Step5 = () => {
  return (
    <NotifyText>
      Thank you for completing the background check! We are now matching you
      with your foster family.
    </NotifyText>
  )
}

const ConnectNotify = member => {
  return (
    <NotifyText>
      Hello {member.name}! You are curently assigned to the {member} and{' '}
      {member} families. <br /> <br />
      You have already done your check-in this month. Way to go! THanky you for
      being a good neighbor.
    </NotifyText>
  )
}

export default Notification
