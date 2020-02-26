import React from 'react'

const ReviewInfo = ({ user }) => (
  <div>
    <h3>
      Name: {user.firstName} {user.lastName}{' '}
    </h3>
    <h3>Phone: {user.phone} </h3>
    <h3> Email: {user.email}</h3>
    <h3>Address: {user.address}</h3>
    <h3>City: {user.city}</h3>
    <h3>State: {user.state}</h3>
    <h3>Zip: {user.zip}</h3>
    <h3>Country: {user.country}</h3>
  </div>
)

export default ReviewInfo
