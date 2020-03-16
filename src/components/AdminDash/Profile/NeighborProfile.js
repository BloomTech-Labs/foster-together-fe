import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getNeighborById } from '../../../redux/thunks/neighThunks'
import Profile from './Profile'
import { getFamilyById } from '../../../redux/thunks/famThunks'

export default function UserProfile() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getNeighborById(id))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(getFamilyById(id))
  }, [dispatch, id])

  const { selectedNeighbor } = useSelector(state => state.neigh)
  const { selectedFamily } = useSelector(state => state.fam)

  return (
    (<Profile profile={selectedNeighbor} type='Neighbor' />),
    (<Profile profile={selectedFamily} type='Family' />)
  )
}
