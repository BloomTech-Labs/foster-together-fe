import React, { useState, useEffect } from 'react'
import { Flex } from '../../../GlobalStyles'
import {
  ReviewContainer,
  BtnContainer,
  Reviewtextone,
  CityStateZip,
} from '../styles/reviewStyles'
import { LabelContainer, RadioSpan } from '../styles/radioButtonStyles'

const handleCheck = (checked, setChecked, checkbox) => {
  if (!checked.family && !checked.neighbor && checkbox === 'family') {
    setChecked({
      ...checked,
      family: !checked.family,
      neighbor: checked.neighbor,
    })
  } else if (!checked.family && !checked.neighbor && checkbox === 'neighbor') {
    setChecked({
      ...checked,
      family: checked.family,
      neighbor: !checked.neighbor,
    })
  } else {
    setChecked({
      ...checked,
      family: !checked.family,
      neighbor: !checked.neighbor,
    })
  }
}

const RadioButton = ({ setIsNeighbor }) => {
  const [checked, setChecked] = useState({ family: true, neighbor: false })
  useEffect(() => {
    setIsNeighbor(checked.neighbor)
  }, [setIsNeighbor, checked])

  return (
    <Flex>
      <LabelContainer
        onClick={() => handleCheck(checked, setChecked, 'neighbor')}
        class='container'
      >
        Neighbor
        <RadioSpan checked={checked.neighbor}></RadioSpan>
      </LabelContainer>
      <LabelContainer
        onClick={() => handleCheck(checked, setChecked, 'family')}
        class='container'
      >
        Family
        <RadioSpan checked={checked.family}></RadioSpan>
      </LabelContainer>
    </Flex>
  )
}

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
    <BtnContainer justify='flex-start'>
      <RadioButton setIsNeighbor={setIsNeighbor} />
    </BtnContainer>
  </div>
)
export default ReviewInfo
