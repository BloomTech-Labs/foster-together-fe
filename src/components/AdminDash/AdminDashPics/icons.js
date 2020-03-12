import React from 'react'

export const Circle = props => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 10 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle center='true' cx='5' cy='5' r='5' fill={props.color} />
  </svg>
)
