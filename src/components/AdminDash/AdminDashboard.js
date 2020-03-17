import React, { useEffect } from 'react'
import NeighborTable from './Table/NeighborTable'
import Navigation from './Navigation/Navigation'
import Welcome from './Welcome'
import TaskBar from './TaskBar/TaskBar'
import { DashContainer, TableContain } from './adminDashStyles'
import { useSelector, useDispatch } from 'react-redux'
import { getMembers } from '../../redux/thunks/memThunks'

export default function Distance(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMembers())
  }, [dispatch])
  const { membersArray } = useSelector(state => state.mem)
  return (
    <>
      <Navigation routing={props} />
      <DashContainer>
        <Welcome />
        <TaskBar />
        <TableContain>
          <NeighborTable
            userType='Neighbors'
            Neighbors={membersArray}
            props={props}
          />
        </TableContain>
      </DashContainer>
    </>
  )
}
