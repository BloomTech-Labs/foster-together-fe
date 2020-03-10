import React from 'react'
import {
  ReviewContainer,
  BtnContainer,
  Reviewtextone,
  CityStateZip,
} from '../styles/reviewStyles'
import RadioButton from './RadioButton'

const ReviewInfo = ({ setIsNeighbor, values }) => (
  <div>
    <p>Almost Done! Does this information look correct to you?</p>
    <ReviewContainer>
      <div>
        <Reviewtextone>
          Name: {values?.first_name} {values?.last_name}{' '}
        </Reviewtextone>
        <Reviewtextone>Phone: {values?.phone} </Reviewtextone>
        <Reviewtextone> Email: {values?.email}</Reviewtextone>
      </div>
      <CityStateZip>
        <p>{values?.address},</p>
        <p>
          {values?.city}, {values?.state} &nbsp;
          {values?.zip}
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
