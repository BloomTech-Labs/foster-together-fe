import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserProfile() {
  const { id } = useParams()
  const profile = useSelector(state =>
    state.neigh.neighborsArray.find(item => item.neighbor_id === Number(id))
  )
  return (
    <>
      <h1> Coming Soon! </h1>
      <h1>
        {' '}
        {profile?.first_name} {profile?.last_name}'s Profile
      </h1>
    </>
  )
}
