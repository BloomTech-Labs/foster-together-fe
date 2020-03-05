import React from 'react'
import {
  RadioBtn,
  ReviewContainer,
  BtnContainer,
  Reviewtextone,
  CityStateZip,
} from '../styles/reviewStyles'
const ReviewInfo = ({ user }) => (
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
          {user.city}, {user.state}
          {user.zip}
        </p>
      </CityStateZip>
    </ReviewContainer>
    <p>
      One last thing. Are you volunteering to be a Foster Neighbor or Foster
      Family?
    </p>
    <BtnContainer>
      <div>
        <input type='radio' name='type' id='families' value='families' />
        <label for='families'>Family</label>
      </div>
      <div>
        <input type='radio' name='type' id='neighbors' value='neighbors' />
        <label for='neighbors'>Neighbor</label>
      </div>
    </BtnContainer>
  </div>
)
export default ReviewInfo
