import React from 'react'
import { NotifyDiv, NotifyText } from './notificationStyles'

const Notification = () => {
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

export default Notification
