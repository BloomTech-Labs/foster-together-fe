// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { getFamilyById } from '../../../redux/thunks/famThunks'
// import Profile from './Profile'

// export default function UserProfile() {
//   const dispatch = useDispatch()
//   const { id } = useParams()

//   useEffect(() => {
//     dispatch(getFamilyById(id))
//   }, [dispatch, id])

//   const { selectedFamily } = useSelector(state => state.fam)

//   return <Profile profile={selectedFamily} type='Family' />
// }
