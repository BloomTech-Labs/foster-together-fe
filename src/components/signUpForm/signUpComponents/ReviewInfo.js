import React from 'react'
import {
  ReviewContainer,
  BtnContainer,
  Reviewtextone,
  CityStateZip,
} from '../styles/reviewStyles'
import RadioButton from './RadioButton'

const ReviewInfo = ({ user, setIsNeighbor }) => (
  <div>
    <p>Almost Done! Does this information look correct to you?</p>
    <ReviewContainer>
      <div>
        <Reviewtextone>
          Name: {user.first_name} {user.last_name}{' '}
        </Reviewtextone>
        <Reviewtextone>Phone: {user.phone} </Reviewtextone>
        <Reviewtextone> Email: {user.email}</Reviewtextone>
      </div>
      <CityStateZip>
        <p>{user.address},</p>
        <p>
          {user.city}, {user.state} &nbsp;
          {user.zip}
        </p>
      </CityStateZip>
    </ReviewContainer>
    <p>One last thing. Are you volunteering to be a Neighbor or Family?</p>
    <BtnContainer>
      <RadioButton setIsNeighbor={setIsNeighbor} />
    </BtnContainer>
  </div>
)
export default ReviewInfo
