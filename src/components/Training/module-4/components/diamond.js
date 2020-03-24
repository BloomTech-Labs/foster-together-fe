import React from 'react'

const Diamond = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 32 32',
}) => (
  <svg
    width='9'
    height='9'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='6'
      y='0.343262'
      width='7'
      height='7'
      transform='rotate(45 6 0.343262)'
      fill='#343434'
    />
  </svg>
)

export default Diamond
